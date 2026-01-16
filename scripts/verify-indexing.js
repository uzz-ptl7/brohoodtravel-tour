#!/usr/bin/env node

/**
 * Google Indexing Verification Script
 * Checks if pages are properly prerendered and crawlable
 *
 * Usage: node scripts/verify-indexing.js
 */

const https = require("https");
const destinations = require("../public/data/destinations.json");

const DOMAIN = "https://brotherhoodunitedcompanyltd.com";
const USER_AGENT =
  "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)";

// Colors for terminal output
const colors = {
  green: "\x1b[32m",
  red: "\x1b[31m",
  yellow: "\x1b[33m",
  reset: "\x1b[0m",
  cyan: "\x1b[36m",
  bold: "\x1b[1m",
};

// All URLs to check
const urlsToCheck = [
  "/",
  "/destinations",
  "/services",
  ...destinations.map((dest) => `/destination/${dest.id}`),
  "/service-booking/vip-transport",
  "/service-booking/ordinary-transport",
  "/service-booking/airport",
  "/service-booking/hotel",
  "/service-booking/car-rental",
  "/service-booking/expert-drivers",
  "/service-booking/party",
  "/service-booking/field-car",
  "/service-booking/wedding",
];

/**
 * Fetch URL with Googlebot user agent
 */
function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        "User-Agent": USER_AGENT,
      },
    };

    https
      .get(url, options, (res) => {
        let data = "";

        res.on("data", (chunk) => {
          data += chunk;
        });

        res.on("end", () => {
          resolve({
            statusCode: res.statusCode,
            html: data,
            headers: res.headers,
          });
        });
      })
      .on("error", (err) => {
        reject(err);
      });
  });
}

/**
 * Check if HTML contains actual content (not just empty React shell)
 */
function isPrerendered(html) {
  // Check if there's substantial content beyond the root div
  const hasTitle = /<title>(?!.*Vite)/.test(html);
  const hasMetaDescription =
    /<meta\s+name="description"\s+content="[^"]{50,}"/.test(html);
  const hasHeadings = /<h[1-6][^>]*>[^<]{10,}<\/h[1-6]>/.test(html);
  const notEmptyRoot = !/<div id="root"><\/div>/.test(html);

  return hasTitle && hasMetaDescription && (hasHeadings || notEmptyRoot);
}

/**
 * Check a single URL
 */
async function checkUrl(path) {
  const url = DOMAIN + path;

  try {
    const result = await fetchUrl(url);
    const prerendered = isPrerendered(result.html);
    const robotsTag = result.headers["x-robots-tag"] || "none";

    const status =
      result.statusCode === 200
        ? `${colors.green}✓${colors.reset}`
        : `${colors.red}✗${colors.reset}`;

    const renderStatus = prerendered
      ? `${colors.green}PRERENDERED${colors.reset}`
      : `${colors.red}EMPTY SHELL${colors.reset}`;

    console.log(`${status} ${result.statusCode} | ${renderStatus} | ${path}`);

    if (!prerendered) {
      console.log(
        `  ${colors.yellow}⚠ Warning: Content not prerendered!${colors.reset}`
      );
      console.log(
        `  ${colors.yellow}  Google may not index this page.${colors.reset}`
      );
    }

    if (!robotsTag.includes("index")) {
      console.log(
        `  ${colors.yellow}⚠ Warning: X-Robots-Tag missing or blocking!${colors.reset}`
      );
    }

    return {
      path,
      statusCode: result.statusCode,
      prerendered,
      robotsTag,
      success: result.statusCode === 200 && prerendered,
    };
  } catch (error) {
    console.log(`${colors.red}✗ ERROR${colors.reset} | ${path}`);
    console.log(`  ${colors.red}${error.message}${colors.reset}`);
    return {
      path,
      statusCode: 0,
      prerendered: false,
      error: error.message,
      success: false,
    };
  }
}

/**
 * Main verification function
 */
async function verifyIndexing() {
  console.log(`${colors.bold}${colors.cyan}
╔════════════════════════════════════════════════════════════╗
║   Google Indexing Verification Script                     ║
║   Brotherhood United Company Ltd                           ║
╚════════════════════════════════════════════════════════════╝
${colors.reset}`);

  console.log(
    `\n${colors.bold}Checking ${urlsToCheck.length} URLs...${colors.reset}\n`
  );
  console.log(`Domain: ${colors.cyan}${DOMAIN}${colors.reset}`);
  console.log(`User-Agent: ${colors.cyan}Googlebot${colors.reset}\n`);

  const results = [];

  // Check URLs sequentially to avoid rate limiting
  for (const path of urlsToCheck) {
    const result = await checkUrl(path);
    results.push(result);

    // Small delay to be polite
    await new Promise((resolve) => setTimeout(resolve, 200));
  }

  // Summary
  console.log(
    `\n${colors.bold}${colors.cyan}═══════════════════════════════════════════════════════════${colors.reset}`
  );
  console.log(`${colors.bold}SUMMARY${colors.reset}\n`);

  const successful = results.filter((r) => r.success).length;
  const prerendered = results.filter((r) => r.prerendered).length;
  const failed = results.filter((r) => !r.success).length;

  console.log(`Total URLs:       ${urlsToCheck.length}`);
  console.log(`${colors.green}✓ Successful:     ${successful}${colors.reset}`);
  console.log(`${colors.green}✓ Prerendered:    ${prerendered}${colors.reset}`);
  console.log(`${colors.red}✗ Failed:         ${failed}${colors.reset}\n`);

  if (prerendered === urlsToCheck.length) {
    console.log(
      `${colors.green}${colors.bold}🎉 SUCCESS! All pages are prerendered and crawlable!${colors.reset}`
    );
    console.log(
      `${colors.green}Google can now index all ${urlsToCheck.length} pages.${colors.reset}\n`
    );
    console.log(`${colors.cyan}Next steps:${colors.reset}`);
    console.log(`1. Submit sitemap to Google Search Console`);
    console.log(`2. Request indexing for key pages`);
    console.log(`3. Monitor indexing status over next 1-2 weeks\n`);
  } else {
    console.log(
      `${colors.yellow}⚠ WARNING: ${
        urlsToCheck.length - prerendered
      } pages are not prerendered!${colors.reset}`
    );
    console.log(
      `${colors.yellow}These pages may not be indexed by Google.${colors.reset}\n`
    );
    console.log(`${colors.cyan}Troubleshooting:${colors.reset}`);
    console.log(`1. Ensure netlify.toml is deployed`);
    console.log(`2. Check Netlify build logs for errors`);
    console.log(`3. Verify _redirects file has force=false`);
    console.log(`4. Try rebuilding the site\n`);
  }

  // List problematic URLs
  const problematic = results.filter((r) => !r.success);
  if (problematic.length > 0) {
    console.log(`${colors.red}Problematic URLs:${colors.reset}`);
    problematic.forEach((r) => {
      console.log(`  - ${r.path} (${r.statusCode || "ERROR"})`);
    });
    console.log("");
  }
}

// Run verification
verifyIndexing().catch(console.error);
