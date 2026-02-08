import { useEffect } from "react";
import { initApp } from "./appLogic";

const characterNameStyle = {
  textAlign: "center",
  fontWeight: "bold",
  marginBottom: "10px",
  minHeight: "20px"
};

export default function App() {
  useEffect(() => {
    const cleanup = initApp();
    return () => {
      if (typeof cleanup === "function") cleanup();
    };
  }, []);

  return (
    <>
      <h1 className="appTitle" data-i18n="appTitle">Minecraft Scene Creator</h1>
      <div className="languageToggle" aria-label="Language">
        <label htmlFor="languageSelect" data-i18n="languageLabel">
          Language
        </label>
        <select id="languageSelect">
          <option value="en">English</option>
          <option value="fr">Francais</option>
          <option value="es">Espanol</option>
          <option value="de">Deutsch</option>
          <option value="it">Italiano</option>
        </select>
      </div>
      <button
        id="themeToggle"
        className="themeToggle"
        aria-label="Toggle theme"
        data-i18n-aria="toggleTheme"
      >
        Light Mode
      </button>

      <div className="toolbar">
        <button
          id="penBtn"
          className="toolBtn"
          aria-label="Pen"
          title="Pen"
          data-i18n-aria="toolPen"
          data-i18n-title="toolPen"
        >
          <img src="/icons/pen_button.png" alt="" className="toolIcon" />
        </button>
        <button
          id="lineBtn"
          className="toolBtn toolBtn--line"
          aria-label="Line"
          title="Line"
          data-i18n-aria="toolLine"
          data-i18n-title="toolLine"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="toolIcon toolIcon--line">
            <path d="M4 18l16-12" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </button>
        <button
          id="eraserBtn"
          className="toolBtn"
          aria-label="Eraser"
          title="Eraser"
          data-i18n-aria="toolEraser"
          data-i18n-title="toolEraser"
        >
          <img src="/icons/eraser_button.png" alt="" className="toolIcon" />
        </button>
        <div className="shapeControl">
          <button
            id="shapeBtn"
            className="toolBtn"
            aria-label="Shape"
            title="Shape"
            data-i18n-aria="toolShape"
            data-i18n-title="toolShape"
          >
            <img
              src="/icons/shapes_button.png"
              alt=""
              className="toolIcon toolIcon--shape"
            />
          </button>
          <select
            id="shapeSelect"
            className="shapeSelect"
            title="Shape"
            data-i18n-title="toolShape"
          >
            <option value="rect">Rectangle</option>
            <option value="circle">Circle</option>
            <option value="triangle">Triangle</option>
          </select>
        </div>
        <div className="brushControl">
          <label className="brushLabel" htmlFor="brushSize" data-i18n="brushSize">
            Brush Size
          </label>
          <input
            type="range"
            id="brushSize"
            min="1"
            max="100"
            defaultValue="50"
            title="Brush Size"
            data-i18n-title="brushSize"
          />
        </div>
        <input type="color" id="colorPicker" defaultValue="#000000" />
        <button
          id="clearCanvasBtn"
          className="toolBtn"
          aria-label="Clear Canvas"
          title="Clear Canvas"
          data-i18n-aria="clearCanvas"
          data-i18n-title="clearCanvas"
        >
          <img src="/icons/delete_all_button.png" alt="" className="toolIcon" />
        </button>
        <div className="toolbarSpacer"></div>
        <button id="exportBtn" className="btnPrimary exportToolbar" data-i18n="exportScene">
          Export Scene
        </button>
      </div>

      <div className="app">
        <div className="panel-left">
          <div className="panelSection">
            <h3 data-i18n="mySkins">My Skins</h3>
            <div className="skinButtons">
              <button id="loadSteve" className="skinBtn"></button>
              <button id="loadAlex" className="skinBtn"></button>
            </div>
            <input
              type="text"
              id="playerUsername"
              placeholder="Enter a Minecraft name"
              data-i18n-placeholder="enterMinecraftName"
            />
            <button id="fetchSkinBtn" className="btnPrimary" data-i18n="importSkin">
              Import Skin
            </button>
            <input type="file" id="skinUpload" hidden />
            <div id="uploadedSkins">
              <button id="uploadBtn" className="addSkinBtn">
                +
              </button>
            </div>
          </div>


          <div className="panelSection">
            <h3 data-i18n="myPoses">My Poses</h3>
            <button id="savePose" className="btnPrimary" data-i18n="savePose">
              Save Pose
            </button>
            <button id="loadPose" className="btnSecondary" data-i18n="loadPose">
              Load Pose
            </button>
          </div>

          <div className="panelSection">
            <h3 data-i18n="myCharacter">My Character</h3>
            <button id="addCharacter" className="btnPrimary" data-i18n="addCharacter">
              Add Character
            </button>
            <div id="charactersList" className="charactersList"></div>
          </div>
        </div>

        <div id="renderArea">
          <div id="backgroundLayer"></div>
          <canvas id="drawCanvas"></canvas>
          <div id="viewer"></div>
        </div>

        <div className="panel-right-column">
          <div className="panel-bg">
            <h3 data-i18n="background">Background</h3>
            <div className="bgButtons">
              <input type="color" id="bgColorPicker" defaultValue="#000000" />
              <input type="file" id="bgUpload" hidden />
              <button id="bgTransparent" className="btnSecondary" data-i18n="transparent">
                Transparent
              </button>
              <button id="uploadBgBtn" className="btnSecondary" data-i18n="uploadImage">
                Upload Image
              </button>
              <button id="removeBgBtn" className="btnGhost" data-i18n="removeImage">
                Remove Image
              </button>
            </div>
          </div>

          <div className="panel-right">
            <div className="panelSection">
              <div id="characterName" style={characterNameStyle}></div>
            </div>

            <div className="panelSection collapsible" data-section="head">
            <button className="sectionToggle" type="button">
              <span data-i18n="head">Head</span>
              <span className="chev">▾</span>
            </button>
            <div className="sectionContent">
              <input type="range" id="headX" min="-60" max="60" defaultValue="0" />
              <button className="reset" data-part="headX">
                <span data-i18n="resetUpDown">Reset Up/Down</span>
              </button>

              <input type="range" id="headY" min="-90" max="90" defaultValue="0" />
              <button className="reset" data-part="headY">
                <span data-i18n="resetLeftRight">Reset Left/Right</span>
              </button>
            </div>
          </div>

          <div className="panelSection collapsible" data-section="arms">
            <button className="sectionToggle" type="button">
              <span data-i18n="arms">Arms</span>
              <span className="chev">▾</span>
            </button>
            <div className="sectionContent">
              <input
                type="range"
                id="rightArmX"
                min="-180"
                max="180"
                defaultValue="0"
              />
              <input type="range" id="rightArmZ" min="-90" max="90" defaultValue="0" />
              <button className="reset" data-part="rightArm">
                <span data-i18n="resetRightArm">Reset Right Arm</span>
              </button>

              <input
                type="range"
                id="leftArmX"
                min="-180"
                max="180"
                defaultValue="0"
              />
              <input type="range" id="leftArmZ" min="-90" max="90" defaultValue="0" />
              <button className="reset" data-part="leftArm">
                <span data-i18n="resetLeftArm">Reset Left Arm</span>
              </button>
            </div>
          </div>

          <div className="panelSection collapsible" data-section="legs">
            <button className="sectionToggle" type="button">
              <span data-i18n="legs">Legs</span>
              <span className="chev">▾</span>
            </button>
            <div className="sectionContent">
              <input type="range" id="rightLegX" min="-90" max="90" defaultValue="0" />
              <input type="range" id="leftLegX" min="-90" max="90" defaultValue="0" />
              <button className="reset" data-part="legs">
                <span data-i18n="resetLegs">Reset Legs</span>
              </button>
            </div>
          </div>

            <div className="panelSection">
              <button id="resetAll" data-i18n="resetAll">Reset All</button>
            </div>
          </div>
        </div>
      </div>

      <div id="poseGalleryModal">
        <div id="poseGalleryContent"></div>
      </div>

      <div id="appModal" className="appModal" aria-hidden="true">
        <div className="appModalContent" role="dialog" aria-modal="true">
          <h3 id="modalTitle">Modal</h3>
          <p id="modalMessage"></p>
          <label id="modalLabel" htmlFor="modalInput"></label>
          <input id="modalInput" type="text" />
          <div className="appModalActions">
            <button id="modalCancel">Cancel</button>
            <button id="modalConfirm">OK</button>
          </div>
        </div>
      </div>
    </>
  );
}
