import navigation from "../../config/navigation";
import LinksStyled from "./LinksStyled";

function Links() {
  return (
    <LinksStyled>
      {navigation.map((item) => (
        <div style={{ padding: "10px" }}>
          <a href={item.url}>{item.label}</a>
        </div>
      ))}
    </LinksStyled>
  );
}

export default Links;