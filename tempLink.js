const links = [
  "https://uplcm.com/4/6825061", // 1 වෙනි ක්ලික් එකට යන ලින්ක් එක
  "https://uplcm.com/4/8442621",   // 2 වෙනි ක්ලික් එකට යන ලින්ක් එක
  "https://uplcm.com/4/9447964",   // 3 වෙනි ක්ලික් එකට යන ලින්ක් එක
  "https://uplcm.com/4/5269605"    // 4 වෙනි ක්ලික් එකට යන ලින්ක් එක
];

// දැනට ක්ලික් කරලා තියෙන බටන් ගාණ චෙක් කරනවා
const currentClicks = (JSON.parse(localStorage.getItem("clickedButtons")) || []).length;

// ක්ලික් කරපු ගාණට අදාළ ලින්ක් එක තෝරලා tempLink එකට දෙනවා
const tempLink = links[currentClicks] || links[0];

