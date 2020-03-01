import React from 'react';
import { connect } from 'react-redux';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

class VideoModal extends React.PureComponent {
  render() {
    const toggle = () => {
      this.props.dispatch({ type: 'CLOSE_VIDEO_MODAL' });
      this.props.dispatch({ type: 'CLEAR_VIDEO' });
    }
    const { ytVideo } = this.props;
    return (
      <Modal isOpen={this.props.modalOpen} toggle={toggle} size="xl">
        <ModalHeader toggle={toggle}>{ytVideo.title}</ModalHeader>
        <ModalBody>
          <iframe
            height="480"
            width="100%"
            title={ytVideo.title}
            src={`https://www.youtube.com/embed/${ytVideo.id}`}>
          </iframe>
        </ModalBody>
      </Modal>
    );
  }
}

const mapStateToProps = store => ({
  modalOpen: store.video.modalOpen,
  ytVideo: store.video.ytVideo,
});

export default connect(mapStateToProps)(VideoModal);
