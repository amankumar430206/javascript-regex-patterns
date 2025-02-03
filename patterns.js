// Only positive integers
export const ONLY_NUMBERS = /^[1-9]\d*$/;

// Only alphabets (uppercase and lowercase)
export const ONLY_ALPHABETS = /^[A-Za-z]+$/;

// Alphanumeric without spaces
export const ALPHANUMERIC = /^[A-Za-z0-9]+$/;

// Alphanumeric with spaces
export const ALPHANUMERIC_WITH_SPACES = /^[A-Za-z0-9 ]+$/;

// Basic email validation
export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// International phone number (+country code and up to 15 digits)
export const PHONE_NUMBER = /^\+?[1-9]\d{1,14}$/;

// URL validation (supports http, https, and www)
export const URL_PATTERN =
  /^(https?:\/\/)?([\w.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/;

// Password (Minimum 8 characters, at least one letter and one number)
export const PASSWORD_PATTERN = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

// Strong password (Min 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special character)
export const STRONG_PASSWORD_PATTERN =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// Postal code (5 or 6 digit zip/postal codes)
export const POSTAL_CODE_PATTERN = /^\d{5,6}$/;

// Hex color code (# followed by 3 or 6 hex digits)
export const HEX_COLOR_PATTERN = /^#?([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/;

// Date format (YYYY-MM-DD)
export const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

// Time format (HH:MM in 24-hour format)
export const TIME_PATTERN = /^([01]\d|2[0-3]):[0-5]\d$/;

// Date-Time format (YYYY-MM-DD HH:MM)
export const DATE_TIME_PATTERN = /^\d{4}-\d{2}-\d{2} ([01]\d|2[0-3]):[0-5]\d$/;

// IPv4 address validation
export const IPV4_PATTERN =
  /^(25[0-5]|2[0-4]\d|1\d\d|\d\d?)\.(25[0-5]|2[0-4]\d|1\d\d|\d\d?)\.(25[0-5]|2[0-4]\d|1\d\d|\d\d?)\.(25[0-5]|2[0-4]\d|1\d\d|\d\d?)$/;

// IPv6 address validation
export const IPV6_PATTERN = /^([a-fA-F0-9]{1,4}:){7,7}[a-fA-F0-9]{1,4}$/;

// Credit card number (Supports Visa, MasterCard, AMEX, and others)
export const CREDIT_CARD_PATTERN = /^(\d{4}[- ]?){3}\d{4}$/;

// UUID (Universally Unique Identifier - Version 4)
export const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;

// File name with extension (e.g., "file.jpg", "document.pdf")
export const FILE_NAME_PATTERN = /^[\w,\s-]+\.[A-Za-z]{2,4}$/;

// Only lowercase letters
export const ONLY_LOWERCASE = /^[a-z]+$/;

// Only uppercase letters
export const ONLY_UPPERCASE = /^[A-Z]+$/;

// Social Security Number (SSN) - US Format (XXX-XX-XXXX)
export const SSN_PATTERN = /^\d{3}-\d{2}-\d{4}$/;

// MAC address (e.g., "00:1A:2B:3C:4D:5E")
export const MAC_ADDRESS_PATTERN = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;

// Base64 encoded string
export const BASE64_PATTERN =
  /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/;

// HTML tag validation (Matches any HTML tag)
export const HTML_TAG_PATTERN = /<\/?[a-z][\s\S]*>/i;

// Username validation (Alphanumeric with underscores, 3-16 characters)
export const USERNAME_PATTERN = /^[a-zA-Z0-9_]{3,16}$/;

// Currency format (e.g., "$123.45" or "€99.99")
export const CURRENCY_PATTERN = /^(\$|€|£)?\d+(\.\d{2})?$/;

// Number with decimals (Allows floating point numbers)
export const DECIMAL_NUMBER_PATTERN = /^\d+(\.\d+)?$/;

// Negative or positive numbers
export const SIGNED_NUMBER_PATTERN = /^-?\d+$/;

// Twitter handle (e.g., "@username")
export const TWITTER_HANDLE_PATTERN = /^@([A-Za-z0-9_]{1,15})$/;

// LinkedIn profile URL
export const LINKEDIN_PATTERN =
  /^https?:\/\/(www\.)?linkedin\.com\/in\/[A-Za-z0-9_-]+\/?$/;

// Instagram username (e.g., "username" or "user.name")
export const INSTAGRAM_USERNAME_PATTERN =
  /^(?!.*\.\.)(?!.*\.$)[A-Za-z0-9._]{1,30}$/;

// YouTube video URL (Supports various YouTube URL formats)
export const YOUTUBE_URL_PATTERN =
  /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)[\w-]{11}$/;

// GitHub repository URL (e.g., "https://github.com/user/repo")
export const GITHUB_REPO_PATTERN =
  /^https?:\/\/github\.com\/[A-Za-z0-9_-]+\/[A-Za-z0-9_.-]+$/;

// Slack username (@username format)
export const SLACK_USERNAME_PATTERN = /^@[A-Za-z0-9._-]+$/;

// Bitcoin wallet address
export const BITCOIN_WALLET_PATTERN = /^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/;

// Ethereum wallet address
export const ETHEREUM_WALLET_PATTERN = /^0x[a-fA-F0-9]{40}$/;

// JSON format validation
export const JSON_PATTERN =
  /^\{(?:[^{}]|(?:\{(?:[^{}]|(?:\{[^{}]*\}))*\}))*\}$/;

// XML format validation
export const XML_PATTERN = /^<\?xml.*?\?>\s*(<.*?>.*<\/.*?>)$/;

// Indian GST number (Goods and Services Tax Identification Number)
export const GST_NUMBER_PATTERN =
  /^\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}$/;

// PAN Card number (Indian tax identification)
export const PAN_CARD_PATTERN = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

// Aadhaar Card number (Indian Unique ID, 12-digit format)
export const AADHAAR_NUMBER_PATTERN = /^\d{12}$/;

// US ZIP+4 Code (e.g., "12345" or "12345-6789")
export const US_ZIP_CODE_PATTERN = /^\d{5}(-\d{4})?$/;

// UK Postcode (Valid UK postcode format)
export const UK_POSTCODE_PATTERN = /^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$/;

// HTML hex color with alpha channel (e.g., "#RRGGBBAA")
export const HEX_COLOR_WITH_ALPHA_PATTERN = /^#?([A-Fa-f0-9]{8})$/;

// CSS RGB color format (e.g., "rgb(255, 255, 255)")
export const RGB_COLOR_PATTERN = /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/;

// CSS RGBA color format (e.g., "rgba(255, 255, 255, 0.5)")
export const RGBA_COLOR_PATTERN =
  /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(0|1|0?\.\d+)\)$/;

// YouTube channel URL
export const YOUTUBE_CHANNEL_URL_PATTERN =
  /^https?:\/\/(www\.)?youtube\.com\/(c|channel|user)\/[A-Za-z0-9_-]+$/;

// Facebook profile URL
export const FACEBOOK_PROFILE_URL_PATTERN =
  /^https?:\/\/(www\.)?facebook\.com\/[A-Za-z0-9.]+$/;

// Twitter profile URL
export const TWITTER_PROFILE_URL_PATTERN =
  /^https?:\/\/(www\.)?twitter\.com\/[A-Za-z0-9_]+$/;

// Medium article URL
export const MEDIUM_ARTICLE_URL_PATTERN =
  /^https?:\/\/(www\.)?medium\.com\/@[A-Za-z0-9_-]+\/[A-Za-z0-9_-]+$/;

// Markdown header pattern (e.g., "# Heading", "## Subheading")
export const MARKDOWN_HEADER_PATTERN = /^(#{1,6})\s+.+/;

// HTML entity encoding pattern (Matches common encoded HTML entities like "&amp;")
export const HTML_ENTITY_PATTERN = /&[a-zA-Z0-9#]+;/;

// VISA card number (Starts with 4, 13-19 digits)
export const VISA_CARD_PATTERN = /^4[0-9]{12}(?:[0-9]{3})?$/;

// MasterCard number (Starts with 51-55 or 2221-2720, 16 digits)
export const MASTERCARD_PATTERN = /^(5[1-5][0-9]{14}|2[2-7][0-9]{14})$/;

// American Express card number (Starts with 34 or 37, 15 digits)
export const AMEX_CARD_PATTERN = /^3[47][0-9]{13}$/;

// CVV code (3 or 4 digits for credit card security)
export const CVV_PATTERN = /^[0-9]{3,4}$/;

// Luhn Algorithm Check (Credit Card Validation)
export const LUHN_ALGORITHM_PATTERN = /^[0-9]{13,19}$/;

// International Bank Account Number (IBAN)
export const IBAN_PATTERN = /^[A-Z]{2}\d{2}[A-Z0-9]{1,30}$/;

// SWIFT/BIC Code
export const SWIFT_BIC_PATTERN = /^[A-Z]{6}[A-Z0-9]{2}([A-Z0-9]{3})?$/;

// Base32 encoded string
export const BASE32_PATTERN = /^[A-Z2-7]+=*$/;

// HTML comments
export const HTML_COMMENT_PATTERN = /<!--[\s\S]*?-->/;

// US Driver’s License (Generic format for different states)
export const US_DRIVERS_LICENSE_PATTERN = /^[A-Za-z0-9]{1,20}$/;

// Roman numerals (I, II, III, IV, etc.)
export const ROMAN_NUMERAL_PATTERN =
  /^(?=[MDCLXVI])M*(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$/;

// IPv4 CIDR notation (e.g., "192.168.1.0/24")
export const IPV4_CIDR_PATTERN =
  /^([0-9]{1,3}\.){3}[0-9]{1,3}\/([0-9]|[1-2][0-9]|3[0-2])$/;

// Windows file path (e.g., "C:\Users\Username\file.txt")
export const WINDOWS_FILE_PATH_PATTERN =
  /^[a-zA-Z]:\\(?:[^\\/:*?"<>|\r\n]+\\)*[^\\/:*?"<>|\r\n]*$/;

// Unix file path (e.g., "/home/user/file.txt")
export const UNIX_FILE_PATH_PATTERN = /^\/(?:[^\/]+\/)*[^\/]*$/;

// Discover card number (Starts with 6011, 622126-622925, 644-649, 65, 16 digits)
export const DISCOVER_CARD_PATTERN = /^6(?:011|5[0-9]{2}|4[4-9][0-9])\d{12}$/;

// Diners Club card number (Starts with 300-305, 36, or 38, 14 digits)
export const DINERS_CLUB_PATTERN = /^3(?:0[0-5]|[68][0-9])\d{11}$/;

// JCB card number (Starts with 2131, 1800, or 35, 15-16 digits)
export const JCB_CARD_PATTERN = /^(?:2131|1800|35\d{2})\d{11,12}$/;

// UnionPay card number (Starts with 62, 16-19 digits)
export const UNIONPAY_CARD_PATTERN = /^62[0-9]{14,17}$/;

// RuPay card number (Starts with 60, 65, 81, 82, or 508, 16 digits)
export const RUPAY_CARD_PATTERN = /^(508[5-9]|60|65|81|82)\d{12}$/;

// Expiry date format (MM/YY)
export const CARD_EXPIRY_PATTERN = /^(0[1-9]|1[0-2])\/\d{2}$/;
