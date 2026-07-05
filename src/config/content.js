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
    popularHighlight: "most popular games!",
    feedbackBanner: {
      title: "Enjoying your stay?",
      body: "We'd love to hear about your experience using our site so we can further improve it.",
      cta: "Fill out our survey now",
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
    body: "Select filters from different categories to reduce your search results. Results are sorted by price in ascending order (low to high).",
    filtersTitle: "Filters",
    clearAll: "Clear all",
    publisher: "Publisher",
    franchise: "Franchise",
    genre: "Genre",
    players: "No. of players",
    maxPrice: "Max price",
    addToCart: "Add to cart",
    resultsLabel: (start, end, total) =>
      total === 0 ? "No results found" : `Showing ${start}-${end} of ${total} results`,
  },

  feedback: {
    title: "Share your experience with us",
    howDidYouFind: "How did you find us?",
    howDidYouFindOptions: [
      "I searched online",
      "I found you through social media",
      "I was told by a friend/family member",
      "I saw your advertisement",
      "I found you another way",
    ],
    easeQuestion: "How easy was it to find what you wanted?",
    ratingQuestion: "How would you rate your overall experience?",
    commentsLabel: "Anything else you'd like to share with us?",
    commentsPlaceholder:
      "What did you like? What games are we missing? We'd love to hear it!",
    later: "I'll tell you later",
    submit: "I'm ready to submit",
    thanks: {
      title: "We got your feedback!",
      body: "Thank you for taking the time to fill out our survey. We hope to see you soon!",
      cta: "Go to homepage",
    },
  },

  cart: {
    steps: ["Cart", "Your Info", "Payment", "Done!"],
    title: "Your cart",
    emptyMessage: "Your cart is currently empty. Add a game from our shop to fill your cart.",
    orderSummary: "Order summary",
    subtotal: "Subtotal",
    shipping: "Shipping",
    total: "Total",
    totalDue: "Total due",
    goBack: "Go back",
    cancel: "Cancel",
    checkout: "Continue to checkout",

    details: {
      title: "Your info",
      firstName: "First name",
      lastName: "Last name",
      email: "Email",
      address: "Address",
      city: "City",
      postal: "Postal code",
      continue: "Continue to payment",
    },

    payment: {
      title: "Payment",
      secureNote: "Secure payment (your card info is not saved)",
      nameOnCard: "Name on card",
      cardNumber: "Card number",
      expiry: "Expiry (MM/YY)",
      cvv: "CVV",
      pay: (amount) => `Pay $${amount}`,
    },

    confirmation: {
      title: "We got your order!",
      body: (orderId) =>
        `Your order ${orderId} is confirmed. We'll send a shipping update to your email shortly.`,
      purchaseDetails: "Purchase details",
      whatsNext: "What happens next?",
      steps: [
        "Your game(s) are packed and ready to ship",
        "You'll receive a tracking number by email",
        "You're game will arrive in 3-5 business days",
      ],
      beforeYouGo: "Before you go, we'd love to hear about your experience shopping with us! Fill out our quick survey and share your thoughts. It takes less than 2 minutes.",
      goHome: "No, I'd like to go to the homepage",
      fillSurvey: "Yes, I'd like to share some feedback",
    },
  },

  footer: {
    tagline: "At New Sale we believe everyone should have the chance to experience the ageless classics",
  },

  shippingCost: 5.99,
};

export default content;
