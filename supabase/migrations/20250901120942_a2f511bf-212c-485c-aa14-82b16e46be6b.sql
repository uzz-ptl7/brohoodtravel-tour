-- Create destinations table
CREATE TABLE public.destinations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  location TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT,
  duration TEXT,
  price_per_person DECIMAL(10,2) NOT NULL,
  max_capacity INTEGER NOT NULL DEFAULT 8,
  highlights TEXT[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create bookings table
CREATE TABLE public.bookings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  destination_id UUID NOT NULL REFERENCES public.destinations(id),
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  number_of_people INTEGER NOT NULL DEFAULT 1,
  preferred_date DATE,
  message TEXT,
  total_price DECIMAL(10,2) NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create contact_submissions table for general contact form
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  service_type TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.destinations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policies for destinations (public read)
CREATE POLICY "Destinations are viewable by everyone" 
ON public.destinations 
FOR SELECT 
USING (true);

-- Create policies for bookings (anyone can insert, but not view others)
CREATE POLICY "Anyone can create bookings" 
ON public.bookings 
FOR INSERT 
WITH CHECK (true);

-- Create policies for contact submissions (anyone can insert)
CREATE POLICY "Anyone can submit contact forms" 
ON public.contact_submissions 
FOR INSERT 
WITH CHECK (true);

-- Insert sample destinations
INSERT INTO public.destinations (name, location, description, image_url, duration, price_per_person, max_capacity, highlights) VALUES
('Kigali City Tour', 'Kigali, Rwanda', 'Explore the vibrant capital city with its modern architecture, cultural sites, and historical landmarks.', '/src/assets/destination-rwanda.jpg', 'Full Day', 80.00, 12, '{"Genocide Memorial", "Local Markets", "City Center"}'),
('Volcanoes National Park', 'Musanze, Rwanda', 'Experience the magnificent mountain gorillas in their natural habitat with expert guides.', '/src/assets/destination-rwanda.jpg', '2-3 Days', 650.00, 8, '{"Gorilla Trekking", "Golden Monkeys", "Scenic Views"}'),
('Lake Kivu Adventure', 'Gisenyi, Rwanda', 'Relax by the beautiful Lake Kivu with water activities and stunning sunset views.', '/src/assets/destination-rwanda.jpg', '2-4 Days', 180.00, 15, '{"Boat Rides", "Beach Relaxation", "Water Sports"}'),
('Nyungwe Forest', 'Nyungwe, Rwanda', 'Discover the ancient rainforest with canopy walks and diverse wildlife viewing.', '/src/assets/destination-rwanda.jpg', '2-3 Days', 220.00, 10, '{"Canopy Walk", "Primate Tracking", "Nature Trails"}');

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_destinations_updated_at
  BEFORE UPDATE ON public.destinations
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_bookings_updated_at
  BEFORE UPDATE ON public.bookings
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();