import React from 'react';
import { ChevronDown } from 'lucide-react';

interface LanguageSelectorProps {
  value: string;
  onChange: (value: string) => void;
  languages: { code: string; name: string }[];
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ value, onChange, languages }) => {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none p-3 pr-10 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
    </div>
  );
};

export default LanguageSelector; 