// Phone number validation patterns for major countries

// General international pattern (E.164 format)
export const PHONE_NUMBER_INTERNATIONAL = /^\+?[1-9]\d{1,14}$/;

// United States & Canada (+1)
export const PHONE_NUMBER_US_CA = /^\+?1?[-.\s]?(\([0-9]{3}\)|[0-9]{3})[-.\s]?[0-9]{3}[-.\s]?[0-9]{4}$/;

// United Kingdom (+44)
export const PHONE_NUMBER_UK = /^\+?44[-.\s]?[0-9]{2,4}[-.\s]?[0-9]{4,6}[-.\s]?[0-9]{3,4}$/;

// Germany (+49)
export const PHONE_NUMBER_DE = /^\+?49[-.\s]?[0-9]{3,5}[-.\s]?[0-9]{4,8}$/;

// France (+33)
export const PHONE_NUMBER_FR = /^\+?33[-.\s]?[1-9][-.\s]?([0-9]{2}[-.\s]?){4}$/;

// Italy (+39)
export const PHONE_NUMBER_IT = /^\+?39[-.\s]?[0-9]{2,4}[-.\s]?[0-9]{4,8}$/;

// Spain (+34)
export const PHONE_NUMBER_ES = /^\+?34[-.\s]?[6-9][0-9]{8}$/;

// Netherlands (+31)
export const PHONE_NUMBER_NL = /^\+?31[-.\s]?[0-9][-.\s]?[0-9]{8}$/;

// Australia (+61)
export const PHONE_NUMBER_AU = /^\+?61[-.\s]?[2-478][-.\s]?[0-9]{8}$/;

// Japan (+81)
export const PHONE_NUMBER_JP = /^\+?81[-.\s]?[0-9]{1,4}[-.\s]?[0-9]{4}[-.\s]?[0-9]{4}$/;

// China (+86)
export const PHONE_NUMBER_CN = /^\+?86[-.\s]?1[3-9][0-9]{9}$/;

// India (+91)
export const PHONE_NUMBER_IN = /^\+?91[-.\s]?[6-9][0-9]{9}$/;

// Brazil (+55)
export const PHONE_NUMBER_BR = /^\+?55[-.\s]?[1-9]{2}[-.\s]?[9]?[0-9]{8}$/;

// Mexico (+52)
export const PHONE_NUMBER_MX = /^\+?52[-.\s]?[1-9][0-9]{9}$/;

// Russia (+7)
export const PHONE_NUMBER_RU = /^\+?7[-.\s]?[4-9][0-9]{9}$/;

// South Korea (+82)
export const PHONE_NUMBER_KR = /^\+?82[-.\s]?[1-9][0-9]{1,2}[-.\s]?[0-9]{3,4}[-.\s]?[0-9]{4}$/;

// Singapore (+65)
export const PHONE_NUMBER_SG = /^\+?65[-.\s]?[6-9][0-9]{7}$/;

// South Africa (+27)
export const PHONE_NUMBER_ZA = /^\+?27[-.\s]?[1-9][0-9]{8}$/;

// Argentina (+54)
export const PHONE_NUMBER_AR = /^\+?54[-.\s]?[1-9][0-9]{1,2}[-.\s]?[0-9]{6,8}$/;

// Turkey (+90)
export const PHONE_NUMBER_TR = /^\+?90[-.\s]?[5][0-9]{2}[-.\s]?[0-9]{3}[-.\s]?[0-9]{4}$/;

// Israel (+972)
export const PHONE_NUMBER_IL = /^\+?972[-.\s]?[5][0-9][-.\s]?[0-9]{3}[-.\s]?[0-9]{4}$/;

// Saudi Arabia (+966)
export const PHONE_NUMBER_SA = /^\+?966[-.\s]?[5][0-9]{8}$/;

// Country code mapping for easy reference
export const PHONE_PATTERNS_BY_COUNTRY = {
  US: PHONE_NUMBER_US_CA,
  CA: PHONE_NUMBER_US_CA,
  UK: PHONE_NUMBER_UK,
  DE: PHONE_NUMBER_DE,
  FR: PHONE_NUMBER_FR,
  IT: PHONE_NUMBER_IT,
  ES: PHONE_NUMBER_ES,
  NL: PHONE_NUMBER_NL,
  AU: PHONE_NUMBER_AU,
  JP: PHONE_NUMBER_JP,
  CN: PHONE_NUMBER_CN,
  IN: PHONE_NUMBER_IN,
  BR: PHONE_NUMBER_BR,
  MX: PHONE_NUMBER_MX,
  RU: PHONE_NUMBER_RU,
  KR: PHONE_NUMBER_KR,
  SG: PHONE_NUMBER_SG,
  ZA: PHONE_NUMBER_ZA,
  AR: PHONE_NUMBER_AR,
  TR: PHONE_NUMBER_TR,
  IL: PHONE_NUMBER_IL,
  SA: PHONE_NUMBER_SA,
};

// Helper function to validate phone number by country
export const validatePhoneByCountry = (phoneNumber, countryCode) => {
  const pattern = PHONE_PATTERNS_BY_COUNTRY[countryCode.toUpperCase()];
  if (!pattern) {
    // Fallback to international pattern
    return PHONE_NUMBER_INTERNATIONAL.test(phoneNumber);
  }
  return pattern.test(phoneNumber);
};

// Helper function to detect possible country from phone number
export const detectCountryFromPhone = (phoneNumber) => {
  // Remove all non-digit characters except +
  const cleaned = phoneNumber.replace(/[^\d+]/g, '');
  
  // Country code detection based on prefix
  const countryPrefixes = {
    '+1': ['US', 'CA'],
    '+44': ['UK'],
    '+49': ['DE'],
    '+33': ['FR'],
    '+39': ['IT'],
    '+34': ['ES'],
    '+31': ['NL'],
    '+61': ['AU'],
    '+81': ['JP'],
    '+86': ['CN'],
    '+91': ['IN'],
    '+55': ['BR'],
    '+52': ['MX'],
    '+7': ['RU'],
    '+82': ['KR'],
    '+65': ['SG'],
    '+27': ['ZA'],
    '+54': ['AR'],
    '+90': ['TR'],
    '+972': ['IL'],
    '+966': ['SA'],
  };

  for (const [prefix, countries] of Object.entries(countryPrefixes)) {
    if (cleaned.startsWith(prefix)) {
      return countries;
    }
  }
  
  return null;
};

// Strict patterns (no separators allowed)
export const STRICT_PATTERNS = {
  US_CA: /^\+?1[2-9][0-9]{9}$/,
  UK: /^\+?44[1-9][0-9]{8,9}$/,
  DE: /^\+?49[1-9][0-9]{10,11}$/,
  FR: /^\+?33[1-9][0-9]{8}$/,
  IN: /^\+?91[6-9][0-9]{9}$/,
  CN: /^\+?86[1][3-9][0-9]{9}$/,
  // Add more strict patterns as needed
};

// Flexible patterns (allow various separators)
export const FLEXIBLE_PATTERNS = {
  INTERNATIONAL: /^\+?[1-9][\d\s\-\.\(\)]{7,15}$/,
  US_CA_FLEXIBLE: /^\+?1?[\s\-\.]?(\([0-9]{3}\)|[0-9]{3})[\s\-\.]?[0-9]{3}[\s\-\.]?[0-9]{4}$/,
  // Add more flexible patterns as needed
};
