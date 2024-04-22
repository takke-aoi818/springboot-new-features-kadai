const stripe = Stripe('pk_test_51P5pDQP3oO9t2W1Xpiq7Qzd0hLJi1xkiKcI0aYHnoEOpkJ8HXTVJhiQfZzqKN1cZVyotGTRqc7Szho0mBXVg7Kc300EZXJFtot');
 const paymentButton = document.querySelector('#paymentButton');
 
 paymentButton.addEventListener('click', () => {
   stripe.redirectToCheckout({
     sessionId: sessionId
   })
 });