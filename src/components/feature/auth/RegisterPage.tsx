import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { useTheme } from "@/context/ThemeContext";
import AuthLayout from "@/components/feature/auth/AuthLayout";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

const RegisterPage: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const [fullNameError, setFullNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [termsError, setTermsError] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();
  const { darkMode } = useTheme();
  const { t } = useTranslation();

  const validateForm = () => {
    let isValid = true;

    // Validate full name
    if (!fullName.trim()) {
      setFullNameError(t('auth.errors.full_name_required'));
      isValid = false;
    } else {
      setFullNameError("");
    }

    // Validate email
    if (!email.trim()) {
      setEmailError(t('auth.errors.email_required'));
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError(t('auth.errors.email_invalid'));
      isValid = false;
    } else {
      setEmailError("");
    }

    // Validate phone
    if (!phone.trim()) {
      setPhoneError(t('auth.errors.phone_required'));
      isValid = false;
    } else if (!/^\d{10,11}$/.test(phone)) {
      setPhoneError(t('auth.errors.phone_invalid'));
      isValid = false;
    } else {
      setPhoneError("");
    }

    // Validate password
    if (!password) {
      setPasswordError(t('auth.errors.password_required'));
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError(t('auth.errors.password_length'));
      isValid = false;
    } else {
      setPasswordError("");
    }

    // Validate confirm password
    if (!confirmPassword) {
      setConfirmPasswordError(t('auth.errors.password_confirm_required'));
      isValid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError(t('auth.errors.password_mismatch'));
      isValid = false;
    } else {
      setConfirmPasswordError("");
    }

    // Validate terms
    if (!agreeTerms) {
      setTermsError(t('auth.errors.terms_required'));
      isValid = false;
    } else {
      setTermsError("");
    }

    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Registration logic here
      login(); // Set the login state after successful registration
      navigate("/"); // Redirect to home page after registration
      alert(t('auth.registration_success'));
    }
  };

  return (
    <AuthLayout
      title={t('auth.register_title')}
      slogan={t('auth.slogan')}
    >
      <div className={`w-full max-w-md p-8 rounded-2xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label
              htmlFor="fullName"
              className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
            >
              {t('auth.full_name_label')}
            </label>
            <input
              id="fullName"
              type="text"
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
                if (fullNameError) setFullNameError("");
              }}
              className={`w-full px-4 py-3 rounded-lg border ${
                fullNameError 
                  ? "border-red-500" 
                  : darkMode 
                    ? "border-gray-600 bg-gray-700 text-white" 
                    : "border-gray-300 bg-white"
              } focus:ring-2 focus:ring-pink-300 focus:border-pink-300 transition duration-300`}
              placeholder={t('auth.full_name_placeholder')}
            />
            {fullNameError && (
              <p className="mt-1 text-sm text-red-600">{fullNameError}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
            >
              {t('auth.email_label')}
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (emailError) setEmailError("");
              }}
              className={`w-full px-4 py-3 rounded-lg border ${
                emailError 
                  ? "border-red-500" 
                  : darkMode 
                    ? "border-gray-600 bg-gray-700 text-white" 
                    : "border-gray-300 bg-white"
              } focus:ring-2 focus:ring-pink-300 focus:border-pink-300 transition duration-300`}
              placeholder={t('auth.email_placeholder')}
            />
            {emailError && (
              <p className="mt-1 text-sm text-red-600">{emailError}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone"
              className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
            >
              {t('auth.phone_label')}
            </label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                if (phoneError) setPhoneError("");
              }}
              className={`w-full px-4 py-3 rounded-lg border ${
                phoneError 
                  ? "border-red-500" 
                  : darkMode 
                    ? "border-gray-600 bg-gray-700 text-white" 
                    : "border-gray-300 bg-white"
              } focus:ring-2 focus:ring-pink-300 focus:border-pink-300 transition duration-300`}
              placeholder={t('auth.phone_placeholder')}
            />
            {phoneError && (
              <p className="mt-1 text-sm text-red-600">{phoneError}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
            >
              {t('auth.password_label')}
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (passwordError) setPasswordError("");
              }}
              className={`w-full px-4 py-3 rounded-lg border ${
                passwordError 
                  ? "border-red-500" 
                  : darkMode 
                    ? "border-gray-600 bg-gray-700 text-white" 
                    : "border-gray-300 bg-white"
              } focus:ring-2 focus:ring-pink-300 focus:border-pink-300 transition duration-300`}
              placeholder={t('auth.password_placeholder')}
            />
            {passwordError && (
              <p className="mt-1 text-sm text-red-600">{passwordError}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
            >
              {t('auth.confirm_password_label')}
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                if (confirmPasswordError) setConfirmPasswordError("");
              }}
              className={`w-full px-4 py-3 rounded-lg border ${
                confirmPasswordError 
                  ? "border-red-500" 
                  : darkMode 
                    ? "border-gray-600 bg-gray-700 text-white" 
                    : "border-gray-300 bg-white"
              } focus:ring-2 focus:ring-pink-300 focus:border-pink-300 transition duration-300`}
              placeholder={t('auth.confirm_password_placeholder')}
            />
            {confirmPasswordError && (
              <p className="mt-1 text-sm text-red-600">
                {confirmPasswordError}
              </p>
            )}
          </div>

          <div className="flex items-start">
            <input
              id="agreeTerms"
              type="checkbox"
              checked={agreeTerms}
              onChange={(e) => {
                setAgreeTerms(e.target.checked);
                if (termsError) setTermsError("");
              }}
              className={`h-4 w-4 mt-1 ${darkMode ? 'text-pink-500 focus:ring-pink-500 border-gray-600 bg-gray-700' : 'text-pink-600 focus:ring-pink-500 border-gray-300'} rounded`}
            />
            <label
              htmlFor="agreeTerms"
              className={`ml-2 block text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
            >
              {t('auth.agree_terms_prefix')}{" "}
              <Link
                to="/terms"
                className={`${darkMode ? 'text-pink-400 hover:text-pink-300' : 'text-pink-500 hover:text-pink-700'}`}
              >
                {t('auth.terms_link')}
              </Link>
            </label>
          </div>
          {termsError && (
            <p className="mt-1 text-sm text-red-600">{termsError}</p>
          )}

          <button
            type="submit"
            className={`w-full ${
              agreeTerms
                ? darkMode 
                  ? 'bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600' 
                  : 'bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500'
                : darkMode
                  ? 'bg-gray-600 cursor-not-allowed'
                  : 'bg-gray-300 cursor-not-allowed'
            } text-white font-medium py-3 px-4 rounded-lg shadow-md transition duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-opacity-50`}
          >
            {t('auth.register_button')}
          </button>
        </form>

        <div className="mt-8">
          <p className={`text-center ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {t('auth.have_account')}{" "}
            <Link
              to="/login"
              className={`text-pink-500 font-medium ${darkMode ? 'hover:text-pink-400' : 'hover:text-pink-700'} transition duration-300`}
            >
              {t('auth.login_here')}
            </Link>
          </p>
        </div>

        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className={`w-full ${darkMode ? 'border-t border-gray-700' : 'border-t border-gray-300'}`}></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className={`px-2 ${darkMode ? 'bg-gray-800 text-gray-400' : 'bg-white text-gray-500'}`}>{t('auth.or')}</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button className={`w-full inline-flex justify-center py-2 px-4 border ${
              darkMode 
                ? 'border-gray-600 bg-gray-700 text-gray-300 hover:bg-gray-600' 
                : 'border-gray-300 bg-white text-gray-500 hover:bg-gray-50'
            } rounded-md shadow-sm text-sm font-medium transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500`}>
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" />
              </svg>
              <span className="ml-2">Google</span>
            </button>

            <button className={`w-full inline-flex justify-center py-2 px-4 border ${
              darkMode 
                ? 'border-gray-600 bg-gray-700 text-gray-300 hover:bg-gray-600' 
                : 'border-gray-300 bg-white text-gray-500 hover:bg-gray-50'
            } rounded-md shadow-sm text-sm font-medium transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500`}>
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.365-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span className="ml-2">Facebook</span>
            </button>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default RegisterPage;
