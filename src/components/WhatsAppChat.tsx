import { useState } from "react";

interface WhatsAppChatProps {
    phoneNumber?: string;
    companyName?: string;
    greetingMessage?: string;
}

const WhatsAppChat = ({
    phoneNumber = "250786425200",
    companyName = "Brotherhood Company",
    greetingMessage = "Hi! How can we help you today? 😊"
}: WhatsAppChatProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");

    const handleSendMessage = () => {
        if (message.trim()) {
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, "_blank");
            setMessage("");
            setIsOpen(false);
        }
    };

    const handleQuickMessage = (quickMsg: string) => {
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(quickMsg)}`;
        window.open(whatsappUrl, "_blank");
        setIsOpen(false);
    };

    const quickMessages = [
        "Hello! I'm interested in booking a tour with your company.",
        "Good day! Could you please tell me more about your travel services?",
        "Hi there! I would like to arrange an airport transfer.",
        "Greetings! I'm looking for information about your car rental services."
    ];

    return (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
            {/* Chat Widget */}
            {isOpen && (
                <div className="mb-4 bg-white rounded-lg shadow-2xl w-[calc(100vw-2rem)] sm:w-80 md:w-96 max-w-96 animate-in slide-in-from-bottom-5 duration-300">
                    {/* Header */}
                    <div className="bg-green-600 text-white p-4 rounded-t-lg flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-green-600 font-bold">
                                B
                            </div>
                            <div>
                                <h3 className="font-semibold">{companyName}</h3>
                                <p className="text-xs text-green-100">Typically replies instantly</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-white hover:text-green-200 transition-colors"
                            aria-label="Close chat"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="p-3 sm:p-4 bg-gray-50 max-h-[60vh] sm:max-h-96 overflow-y-auto">
                        <div className="bg-white rounded-lg p-2.5 sm:p-3 shadow-sm mb-3">
                            <p className="text-xs sm:text-sm text-gray-700">{greetingMessage}</p>
                            <p className="text-[10px] sm:text-xs text-gray-500 mt-1">
                                {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                            </p>
                        </div>

                        {/* Quick Replies */}
                        <div className="space-y-2">
                            <p className="text-[10px] sm:text-xs text-gray-500 mb-2">Quick replies:</p>
                            {quickMessages.map((msg, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleQuickMessage(msg)}
                                    className="block w-full text-left px-2.5 sm:px-3 py-2 bg-white hover:bg-green-50 rounded-lg text-xs sm:text-sm text-gray-700 border border-gray-200 hover:border-green-300 transition-colors"
                                >
                                    {msg}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Input */}
                    <div className="p-2.5 sm:p-3 border-t border-gray-200">
                        <div className="flex space-x-1.5 sm:space-x-2">
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                placeholder="Type a message..."
                                className="flex-1 px-2.5 sm:px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-xs sm:text-sm"
                            />
                            <button
                                onClick={handleSendMessage}
                                className="bg-green-600 hover:bg-green-700 text-white px-3 sm:px-4 py-2 rounded-lg transition-colors flex items-center justify-center flex-shrink-0"
                                aria-label="Send message"
                            >
                                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                            </button>
                        </div>
                        <p className="text-[10px] sm:text-xs text-gray-500 mt-2 text-center">
                            Powered by WhatsApp
                        </p>
                    </div>
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`relative bg-green-600 hover:bg-green-700 text-white rounded-full p-2.5 sm:p-3 shadow-lg transition-all duration-300 ${isOpen ? "scale-90" : "scale-100"
                    }`}
                aria-label="Toggle WhatsApp chat"
            >
                {/* Glow effect */}
                {!isOpen && (
                    <div className="absolute inset-0 rounded-full bg-green-500 opacity-75 animate-[ping_2.5s_cubic-bezier(0,0,0.2,1)_infinite] scale-110"></div>
                )}
                {isOpen ? (
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                ) : (
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                )}
            </button>
        </div>
    );
};

export default WhatsAppChat;
