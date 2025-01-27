import React from "react";
import { useTranslation } from "react-i18next";

const MyContainer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t("This is the front page")}</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium enim inventore illo perspiciatis at quod iusto aliquid consequatur ab exercitationem itaque unde quasi, laborum amet reprehenderit sit velit a quibusdam alias qui architecto iure nam veniam saepe. Ipsam animi officiis blanditiis minus adipisci. Consectetur explicabo in ullam a dolore asperiores exercitationem ratione quibusdam veritatis aut recusandae cum, molestias, nihil inventore ducimus quia magnam sed dolorem possimus. Eveniet eligendi maxime a esse, cum, iure dolorum cupiditate, obcaecati saepe exercitationem ex labore veritatis fuga eius at et quos maiores dicta! Vitae magni maiores cum repellat officiis at exercitationem commodi corrupti necessitatibus ipsam.</p>
    </div>
  );
};

export default MyContainer;
