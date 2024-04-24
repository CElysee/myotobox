// helpers.js

// Function to format numbers as desired
const formatNumber = (number) => {
  const numString = String(number).replace(/\s/g, '');
  const numValue = parseInt(numString);
  
  if (numValue >= 1000000) {
    return (numValue / 1000000).toFixed(1) + 'M';
  } else if (numValue >= 1000) {
    return (numValue / 1000).toFixed(1) + 'K';
  } else {
    return numValue;
  }
};

// Function to capitalize the first letter of a string
const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const formatAmount = (amountInRwf) => {
  return new Intl.NumberFormat("en-RW").format(amountInRwf);
};
const truncateText = (text) => {
  return text.length > 20 ? `${text.substring(0, 20)}...` : text;
};

// Export individual functions
export { formatNumber, capitalizeFirstLetter, formatAmount , truncateText};

// Alternatively, export as a single object
// export default { formatNumber, capitalizeFirstLetter };