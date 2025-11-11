import React, { useState } from "react";
import { Mail, Gift } from "lucide-react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

const Newsletter: React.FC = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success(t("homepage.newsletter.success_message"));
      setEmail("");
    }
  };

  return (
    <section className="py-16 bg-linear-to-r from-accent to-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-primary/20 rounded-full p-4">
            <Gift className="w-8 h-8 text-white" />
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {t("homepage.newsletter.title")}
        </h2>
        <p className="text-xl text-primary/70 mb-8 max-w-2xl mx-auto">
          {t("homepage.newsletter.description")}
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-secondary/40 w-5 h-5" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("homepage.newsletter.email_placeholder")}
                className="w-full pl-12 pr-4 py-4 rounded-full border-0 focus:ring-2 focus:ring-primary/50 focus:outline-none bg-primary text-primary"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-tertiary  px-8 py-4 rounded-full font-medium hover:bg-secondary transition-colors duration-300 whitespace-nowrap"
            >
              {t("homepage.newsletter.subscribe_button")}
            </button>
          </div>
        </form>

        <p className="text-primary/70 text-sm mt-4">
          {t("homepage.newsletter.terms")}
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
