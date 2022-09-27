import React, { useState } from "react";
import { Story } from "react-insta-stories/dist/interfaces";
import InstaStories from "react-insta-stories";
import Modal from "react-modal";
import Header from "../Header";

export interface StoriesProps {}

const customStyles: Modal.Styles = {
  content: {
    top: "40%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "#111111",
    border: "none",
    borderRadius: 30,
  },
  overlay: {
    background: "#111111",
  },
};

const Stories: React.FunctionComponent<StoriesProps> = ({}) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const Comp = () => (
    <Modal
      isOpen={modalIsOpen}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <InstaStories
        stories={[
          {
            duration: 20000,
            content: (props) => (
              <div className="flex flex-col h-full mt-32">
                <p className="text-4xl text-white font-bold">👋 Oii amor</p>
                <p className="text-xl text-white py-8">
                  Preparei esse presente pra você com muito amor, a cada momento
                  que a gente vivia junto, eu ia adicionando umas fotinhas com
                  você, algumas eu tive que improvisar, entããão espero que você
                  goste
                </p>
                <p className="text-4xl font-extrabold text-white mt-4">
                  Te amo demais 💖
                </p>
              </div>
            ),
          },
        ]}
        onAllStoriesEnd={() => setIsOpen(false)}
      />
    </Modal>
  );

  return (
    <>
      {!modalIsOpen && <Header />}
      {modalIsOpen && <Comp />}
      <div className="flex flex-col items-start justify-start flex-1 px-2 border-b pb-2">
        <div>
          <div
            className="rounded-full bg-gradient-to-r  from-[#FFC800]  to-[#D300C5] flex items-center justify-center "
            style={{
              width: "70px",
              height: "70px",
            }}
          >
            <div
              className="rounded-full bg-white flex items-center justify-center"
              style={{
                width: "66px",
                height: "66px",
              }}
            >
              <img
                onClick={() => setIsOpen(true)}
                src="me.jpg"
                alt="avatar"
                className="rounded-full"
              />
            </div>
          </div>
          <p className="text-lg text-center">✨</p>
        </div>
      </div>
    </>
  );
};

export default Stories;
