import React from "react";
import { HoriNavbar } from "../../organisms/horiNavbar/horiNavbar";
import SearchIcon from "@material-ui/icons/Search";
import Photo from "../../organisms/photo/photo";
import { connect } from "react-redux";
import { state } from "../../../store/reducers/rootReducer";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

interface Props {
  pics: {
    id: number;
    url: string;
  }[];
}
const Home: React.FC<Props> = ({ pics }) => {
  return (
    <div className="home">
      <HoriNavbar />
      <div className="contain">
        <img
          src={`https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&dpr=1&auto=format%2Ccompress&fit=crop&w=6199&h=594%201x,%20https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&dpr=2&auto=format%2Ccompress&fit=crop&w=6199&h=594%202x`}
          alt="banner"
        />
        <div className="content">
          <div className="lead_text">
            <h2>Unsplash</h2>
            <h3>The internet’s source of freely-usable images. </h3>
            <h3>Powered by creators everywhere.</h3>
          </div>

          <div className="input">
            <input placeholder="Search photos" type="search" autoCapitalize="none" spellCheck="false" />
            <SearchIcon className="search_icon" />
          </div>
        </div>
      </div>
      <div className="gallery">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 800: 2, 1000: 3 }}>
          <Masonry gutter={20}>
            {pics.map((pic, i) => (
              <Photo photo={pic.url} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
};

const mapStateToProps = (state: state) => {
  console.log(state);
  return {
    pics: state.photo.photos,
  };
};

export default connect(mapStateToProps)(Home);
