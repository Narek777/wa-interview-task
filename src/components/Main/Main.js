import Cards from '../Cards';
import Container from '../base/Container/Container';
import Title from '../base/Title/Title';
import Banner from './Banner/Banner';

import contentMedia from '../../assets/media/content_image.jpg';

import './main.scss.scss';

const Main = () => {
  return (
    <>
      <Banner />
      <Container className="main_wrapper">
        <Title title="CONTENT MAIN TITLE" />
        <div className="intro_section">
          <div className="intro_image">
            <img src={contentMedia} alt="content_image" />
          </div>
          <div className="content_text_container">
            <div className="content_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non sem dui.
              Pellentesque id vulputate sem. Nulla blandit, lacus eget faucibus accumsan, odio ex
              consectetur ex, at rutrum ante felis eget elit. Maecenas molestie dolor id pretium
              molestie. Sed in pellentesque ante, id commodo odio. Aliquam vehicula enim sapien, sed
              malesuada augue congue id. Aenean at posuere diam. Curabitur dapibus nisl eu nulla
              tempor aliquet. Fusce vestibulum at nunc dignissim.
            </div>
            <div className="content_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non sem dui.
              Pellentesque id vulputate sem. Nulla blandit, lacus eget faucibus accumsan, odio ex
              consectetur ex, at rutrum ante felis eget elit. Maecenas molestie dolor id pretium
              molestie. Sed in pellentesque ante, id commodo odio. Aliquam vehicula enim sapien, sed
              malesuada augue congue id. Aenean at posuere diam. Curabitur dapibus nisl eu nulla
              tempor aliquet. Fusce vestibulum at nunc dignissim.
            </div>
            <div className="content_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non sem dui.
              Pellentesque id vulputate sem. Nulla blandit, lacus eget faucibus accumsan, odio ex
              consectetur ex, at rutrum ante felis eget elit. Maecenas molestie dolor id pretium
              molestie. Sed in pellentesque ante, id commodo odio. Aliquam vehicula enim sapien, sed
              malesuada augue congue id. Aenean at posuere diam. Curabitur dapibus nisl eu nulla
              tempor aliquet. Fusce vestibulum at nunc dignissim.
            </div>
            <div className="content_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non sem dui.
              Pellentesque id vulputate sem. Nulla blandit, lacus eget faucibus accumsan, odio ex
              consectetur ex, at rutrum ante felis eget elit. Maecenas molestie dolor id pretium
              molestie. Sed in pellentesque ante, id commodo odio. Aliquam vehicula enim sapien, sed
              malesuada augue congue id. Aenean at posuere diam. Curabitur dapibus nisl eu nulla
              tempor aliquet. Fusce vestibulum at nunc dignissim.
            </div>
          </div>
        </div>
        <Cards />
      </Container>
    </>
  );
};

export default Main;
