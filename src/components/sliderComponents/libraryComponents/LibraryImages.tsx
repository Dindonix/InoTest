import { useTranslation } from "react-i18next";
import i18n from "../../../../i18n";

export default function LibraryImages() {
  const { t } = useTranslation();
  i18n.language;

  return (
    <section className="windowStyle md:mt-0 p-6 w-[87vw]">
      <div className="flex md:flex-row flex-col gap-5 md:justify-between justify-center items-center">
        <figure>
          <figcaption>{t("img-deco")} :</figcaption>
          <img
            className="w-96 h-52 object-cover"
            src="https://images.unsplash.com/photo-1687085932670-7cd128666507?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60"
            alt=""
            role="presentation"
            aria-hidden="true"
          />
        </figure>
        <figure>
          <figcaption>{t("img-info")} :</figcaption>
          <img
            className="w-96 h-52 object-cover"
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhcnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
            alt={t("alt-img-info")}
          />
        </figure>
        <figure>
          <figcaption>{t("img-fonct")} :</figcaption>
          <a href="https://www.w3.org/" target="blank">
            <img
              className="bg-white w-96 h-30 object-cover"
              src="https://www.w3.org/WAI/content-images/wai-tutorials/images/w3c.png"
              alt={t("alt-img-fonct")}
            />
          </a>
        </figure>
        <figure>
          <figcaption>{t("img-text")} :</figcaption>
          <img
            className="w-96 h-52 object-cover"
            src="https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHRleHR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
            alt="Live, Work, Create."
          />
        </figure>
        <figure>
          <figcaption>{t("img-details")} :</figcaption>
          <img
            className="w-96 h-52 object-cover"
            src="https://www.w3.org/WAI/content-images/wai-tutorials/images/chart.png"
            alt={t("alt-img-details")}
          />
        </figure>
      </div>
    </section>
  );
}
