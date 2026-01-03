function validateTransaction(transaction) {
  if (transaction.value > 1000) return 'rejected';
  return 'approved';
}

module.exports = { validateTransaction };
