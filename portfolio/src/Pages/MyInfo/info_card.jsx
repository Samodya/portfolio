export const InfoCard = ({ infoTitle, img, info = [] }) => {
  return (
    <div className="personal_info">
      <div className="info_title">{infoTitle}</div>
      <div className="user_details">
     <div className="user_img"> {img && <img src={img} />}</div>
        {info.map((infom) => (
          <div className="info_card">
            <span className="info_label">{infom.title}</span>
            <span className="info_data">{infom.data}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
