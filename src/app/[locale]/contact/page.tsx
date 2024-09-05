import { useTranslations } from "next-intl";
import Styles from "./Contact.module.scss";
import Contact_form from "@/hooks/contact_form/Contact_form";

const Contact = () => {

  const t = useTranslations();

  const contact = {
    head: t('contact.head'),
    name: t('contact.name'),
    email: t('contact.email'),
    phone: t('contact.phone'),
    detail: t('contact.detail'),
    submit: t('contact.submit'),
    v_name: t('contact.validation.name'),
    v_email: t('contact.validation.email'),
    i_email: t('contact.validation.email_invalid'),
    v_phone: t('contact.validation.phone'),
    i_phone: t('contact.validation.phone_invalid'),
    v_detail: t('contact.validation.detail'),
    address: t('footer.address'),
    modal_head: t('popup.thank'),
    modal_decs: t('popup.submission'),
  }

  return (
    <main>
      <Contact_form contact={contact}/>
      <section>

      </section>
    </main>
  )
}

export default Contact
