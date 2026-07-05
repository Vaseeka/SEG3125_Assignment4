// ============================================================
// CONTENT CONFIG
// All user-facing copy lives here so it's easy to rewrite
// without touching component code. Organised by page/section.
// ============================================================

export const content = {
  siteName: "New Sale",

  nav: {
    home: "Home",
    shop: "Shop",
    feedback: "Feedback",
    cart: "Cart",
    newBadge: "New Sale",
  },

  home: {
    hero: {
      eyebrow: "Interested in expanding your",
      highlight: "Nintendo DS game collection?",
      cta: "Start shopping now",
    },
    dealsTitle: "Looking for some ",
    dealsHighlight: "good deals?",
    popularTitle: "Checkout some of our ",
    popularHighlight: "most popular games",
    feedbackBanner: {
      title: "Enjoying your stay?",
      body: "We would love to hear about your experience so we can improve our site!",
      cta: "Fill out our feedback form",
    },
    contact: {
      title: "Have any questions?",
      subtitle: "Contact us here",
      email: "new_sale@gmail.com",
      phone: "613-123-4567",
    },
  },

  shop: {
    title: "Browse our game collection",
    filtersTitle: "Filters",
    clearAll: "Clear all",
    publisher: "Publisher",
    franchise: "Franchise",
    genre: "Genre",
    players: "No. of players",
    maxPrice: "Max price",
    addToCart: "Add to cart",
    resultsLabel: (start, end, total) =>
      total === 0 ? "No results" : `Showing ${start}-${end} of ${total} results`,
  },

  feedback: {
    title: "Share your experience with us",
    howDidYouFind: "How did you find us?",
    howDidYouFindOptions: [
      "Search engine",
      "Social media",
      "Friend or family",
      "Advertisement",
      "Other",
    ],
    easeQuestion: "How easy was it to find what you wanted?",
    ratingQuestion: "How would you rate your overall experience?",
    commentsLabel: "Anything else you'd like to share?",
    commentsPlaceholder:
      "What did you like? What game are we missing? We'd love to hear it all!",
    later: "I'll fill it out later",
    submit: "I'm ready to submit",
    thanks: {
      title: "We've received your feedback!",
      body: "Thank you for taking the time to fill out our survey.",
      cta: "Go to home",
    },
  },

  cart: {
    steps: ["Cart", "Details", "Payment", "Done!"],
    title: "Your cart",
    emptyMessage: "Your cart is empty — go find your next favourite game!",
    orderSummary: "Order summary",
    subtotal: "Subtotal",
    shipping: "Shipping",
    total: "Total",
    totalDue: "Total due",
    goBack: "Go back",
    cancel: "Cancel",
    checkout: "Proceed to checkout",

    details: {
      title: "Your details",
      firstName: "First name",
      lastName: "Last name",
      email: "Email",
      address: "Street address",
      city: "City",
      postal: "Postal / ZIP",
      continue: "Continue to payment",
    },

    payment: {
      title: "Payment",
      secureNote: "Secure payment — card details are not stored",
      nameOnCard: "Name on card",
      cardNumber: "Card number",
      expiry: "Expiry (MM/YY)",
      cvv: "CVV",
      pay: (amount) => `Pay $${amount}`,
    },

    confirmation: {
      title: "Order confirmed!",
      body: (orderId) =>
        `Your order ${orderId} is confirmed. We'll send a shipping update to your email shortly!`,
      purchaseDetails: "Purchase details",
      whatsNext: "What happens next",
      steps: [
        "Your games are packed and ready to ship",
        "You'll receive a tracking number by email",
        "Estimated delivery: 3-5 business days",
      ],
      beforeYouGo: "Before you go — we'd love to hear about your experience! It takes less than 2 minutes.",
      goHome: "Go to home",
      fillSurvey: "Fill out survey",
    },
  },

  footer: {
    tagline: "Your trusted stop for pre-loved Nintendo DS games.",
  },

  shippingCost: 5.99,
};

export default content;
