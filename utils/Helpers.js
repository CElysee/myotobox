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

const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  const currentDate = new Date();

  const diffInMilliseconds = currentDate - date;
  const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);

  if (diffInDays > 0) {
    return `${diffInDays} day${diffInDays === 1 ? '' : 's'} ago`;
  } else if (diffInHours > 0) {
    return `${diffInHours} hour${diffInHours === 1 ? '' : 's'} ago`;
  } else if (diffInMinutes > 0) {
    return `${diffInMinutes} minute${diffInMinutes === 1 ? '' : 's'} ago`;
  } else {
    return `${diffInSeconds} second${diffInSeconds === 1 ? '' : 's'} ago`;
  }
};

const roundNumbers = (number) => {
  return Math.round(number);
};

// Export individual functions
export { formatNumber, capitalizeFirstLetter, formatAmount , truncateText, formatDate, roundNumbers};

// Alternatively, export as a single object
// export default { formatNumber, capitalizeFirstLetter };