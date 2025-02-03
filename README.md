# 🚀 JavaScript Regex Patterns Collection

A comprehensive collection of JavaScript Regular Expressions (Regex) for form validation and various input fields. This repository includes commonly used regex patterns for validating numbers, emails, passwords, credit cards, social media usernames, and more! 🎯

## 📌 Features
- ✅ Validates common input fields such as numbers, emails, phone numbers, and passwords
- ✅ Supports credit/debit card validation (Visa, MasterCard, Amex, etc.)
- ✅ Includes patterns for social media usernames, IBAN, SWIFT/BIC, and more
- ✅ Easy-to-use JavaScript exports for quick integration

## 📦 Installation

Clone this repository to your project:

```sh
 git clone https://github.com/your-username/regex-patterns.git
```

Or install via npm (if converted into a package later):

```sh
 npm install regex-patterns
```

## 🔥 How to Use

Simply import the regex pattern you need in your JavaScript project:

```js
import { EMAIL_PATTERN, VISA_CARD_PATTERN } from './regexPatterns.js';

const email = "test@example.com";
console.log(EMAIL_PATTERN.test(email)); // true

const cardNumber = "4111111111111111";
console.log(VISA_CARD_PATTERN.test(cardNumber)); // true
```

## 📜 List of Regex Patterns

### 📊 General Input Validation
| Pattern Name               | Regex Pattern                                      | Description |
|----------------------------|----------------------------------------------------|-------------|
| `ONLY_NUMBERS`             | `/^[1-9]\d*$/`                                    | Positive integers only |
| `ONLY_ALPHABETS`           | `/^[A-Za-z]+$/`                                   | Alphabets only |
| `ALPHANUMERIC`             | `/^[A-Za-z0-9]+$/`                               | Alphanumeric without spaces |
| `EMAIL_PATTERN`            | `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`                    | Basic email validation |
| `PHONE_NUMBER`             | `/^\+?[1-9]\d{1,14}$/`                           | International phone number |
| `URL_PATTERN`              | `/^(https?:\/\/)?([\w.-]+)\.([a-z.]{2,6})([\/\w.-]*)*\/?$/` | URL validation |
| `PASSWORD_PATTERN`         | `/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/`        | Password with min 8 chars, 1 letter, 1 number |
| `STRONG_PASSWORD_PATTERN`  | `/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/` | Strong password (1 uppercase, 1 lowercase, 1 number, 1 special character) |

### 💳 Credit/Debit Card Validation
| Pattern Name               | Regex Pattern                                      | Description |
|----------------------------|----------------------------------------------------|-------------|
| `VISA_CARD_PATTERN`        | `/^4[0-9]{12}(?:[0-9]{3})?$/`                     | Visa card validation |
| `MASTERCARD_PATTERN`       | `/^(5[1-5][0-9]{14}|2[2-7][0-9]{14})$/`           | MasterCard validation |
| `AMEX_CARD_PATTERN`        | `/^3[47][0-9]{13}$/`                              | American Express card |
| `DISCOVER_CARD_PATTERN`    | `/^6(?:011|5[0-9]{2}|4[4-9][0-9])\d{12}$/`        | Discover card validation |
| `DINERS_CLUB_PATTERN`      | `/^3(?:0[0-5]|[68][0-9])\d{11}$/`                 | Diners Club card |
| `JCB_CARD_PATTERN`         | `/^(?:2131|1800|35\d{2})\d{11,12}$/`             | JCB card validation |
| `RUPAY_CARD_PATTERN`       | `/^(508[5-9]|60|65|81|82)\d{12}$/`                | RuPay card validation |
| `CVV_PATTERN`              | `/^[0-9]{3,4}$/`                                  | CVV/CVC security code |
| `CARD_EXPIRY_PATTERN`      | `/^(0[1-9]|1[0-2])\/\d{2}$/`                     | Expiry date in MM/YY format |

### 🌍 Social Media Validation
| Pattern Name                 | Regex Pattern                                      | Description |
|------------------------------|----------------------------------------------------|-------------|
| `INSTAGRAM_USERNAME_PATTERN` | `/^(?!.*\.\.)(?!.*\.$)[A-Za-z0-9._]{1,30}$/`     | Instagram username |
| `YOUTUBE_URL_PATTERN`        | `/^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)[\w-]{11}$/` | YouTube video URL |
| `GITHUB_REPO_PATTERN`        | `/^https?:\/\/github\.com\/[A-Za-z0-9_-]+\/[A-Za-z0-9_.-]+$/` | GitHub repository URL |

### 🏦 Banking & Financial Validation
| Pattern Name       | Regex Pattern                                      | Description |
|--------------------|----------------------------------------------------|-------------|
| `IBAN_PATTERN`    | `/^[A-Z]{2}\d{2}[A-Z0-9]{1,30}$/`                  | IBAN validation |
| `SWIFT_BIC_PATTERN` | `/^[A-Z]{6}[A-Z0-9]{2}([A-Z0-9]{3})?$/`          | SWIFT/BIC code validation |

## ⭐ Contribute
Feel free to contribute to this repository by adding more useful regex patterns! Open a pull request with your new regex and a brief description.

## 📢 Spread the Word!
If this repository helped you, give it a **⭐ star** and share it with others who might find it useful! 🚀

## 📜 License
This project is licensed under the MIT License.

---
🔗 **Follow Me:** [GitHub](https://github.com/your-username) | [Twitter](https://twitter.com/your-handle) | [LinkedIn](https://linkedin.com/in/your-profile)

