import React from "react";
import styles from "./quickTime.module.css";
import PropTypes from "prop-types";
import { TimeLineBlocks } from "../TimeLineBlocks";

const validateInputs = (titleIsBold, titleIsItalic) => {
  if (titleIsBold !== true && titleIsBold !== false) {
    console.log("Invalid value '" + titleIsBold + "' for titleIsBold property");
  } else if (titleIsItalic !== true && titleIsItalic !== false) {
    console.log(
      "Invalid value '" + titleIsItalic + "' for titleIsItalic property"
    );
  }
};

export const QuickTimeline = ({
  headerCaption,
  headerCaptionColor,
  headerIsBold,
  headerIsItalic,
  timelineBlocks,
  titleBgColor,
  titleTextColor,
  titleIsBold,
  titleIsItalic,
  titleTextAlign,
  contentBgColor,
  contentTextColor,
  contentIsBold,
  contentIsItalic,
  contentTextAlign,
  dateColor,
  dateIsBold,
  dateIsItalic,
  borderRoundSize,
  circleBgColor,
  circleBorderColor,
  circleBorderHide,
  timelineLineColor,
  footerCaption,
  footerCaptionColor,
  footerIsBold,
  footerIsItalic,
}) => {
  validateInputs(titleIsBold, titleIsItalic);
  let pagebgcolor = window.getComputedStyle(document.body).backgroundColor;

  if (circleBorderColor === undefined || circleBorderColor === "") {
    circleBorderColor = "transparent";
    document.documentElement.style.setProperty(
      "--outl-color",
      circleBorderColor
    );
  } else if (circleBorderColor !== undefined && circleBorderColor !== "") {
    document.documentElement.style.setProperty(
      "--outl-color",
      circleBorderColor
    );
  }
  if (circleBorderHide === true) {
    pagebgcolor =
      parseFloat(pagebgcolor.split(",")[3]) === 0 ? "white" : pagebgcolor;
    document.documentElement.style.setProperty("--outl-color", pagebgcolor);
  }
  // circleBorderColor =
  //   circleBorderColor === undefined || circleBorderColor === ""
  //     ? "#ff9f55"
  //     : circleBorderColor;
  // document.documentElement.style.setProperty(
  //   "--circ-border-color",
  //   circleBorderColor
  // );
  if (circleBgColor !== undefined && circleBgColor !== "") {
    document.documentElement.style.setProperty("--bg-color", circleBgColor);
  } else {
    document.documentElement.style.setProperty("--bg-color", "gray");
  }
  //document.documentElement.style.setProperty("--outl-color", pagebgcolor);
  document.documentElement.style.setProperty(
    "--timeline-color",
    timelineLineColor
  );
  const headerStyle = {
    color:
      headerCaptionColor !== undefined && headerCaptionColor !== ""
        ? headerCaptionColor
        : "",
    display:
      headerCaption !== undefined && headerCaption !== "" ? "block" : "none",
    fontWeight:
      headerIsBold !== undefined && headerIsBold !== ""
        ? headerIsBold === true
          ? "bold"
          : "100"
        : "100",
    fontStyle:
      headerIsItalic !== undefined && headerIsItalic !== ""
        ? headerIsItalic === true
          ? "italic"
          : "normal"
        : "normal",
  };
  const footerStyle = {
    color:
      footerCaptionColor !== undefined && footerCaptionColor !== ""
        ? footerCaptionColor
        : "",
    display:
      footerCaption !== undefined && footerCaption !== "" ? "block" : "none",
    fontWeight:
      footerIsBold !== undefined && footerIsBold !== ""
        ? footerIsBold === true
          ? "bold"
          : "100"
        : "100",
    fontStyle:
      footerIsItalic !== undefined && footerIsItalic !== ""
        ? footerIsItalic === true
          ? "italic"
          : "normal"
        : "normal",
  };
  return (
    <>
      <div className={styles.timelineCap} style={headerStyle}>
        {headerCaption}
      </div>
      <div
        className={timelineBlocks !== undefined ? styles.timeline : styles.hide}
      >
        {timelineBlocks &&
          timelineBlocks.map((tlb, i) => {
            return (
              <TimeLineBlocks
                key={i}
                tlb={tlb}
                styles={styles}
                i={i}
                titleBgColor={titleBgColor}
                titleTextColor={titleTextColor}
                titleIsBold={titleIsBold}
                titleIsItalic={titleIsItalic}
                titleTextAlign={titleTextAlign}
                contentBgColor={contentBgColor}
                contentTextColor={contentTextColor}
                contentIsBold={contentIsBold}
                contentIsItalic={contentIsItalic}
                borderRoundSize={borderRoundSize}
                contentTextAlign={contentTextAlign}
                dateColor={dateColor}
                dateIsBold={dateIsBold}
                dateIsItalic={dateIsItalic}
              />
            );
          })}
      </div>
      <div className={styles.timelineFooter} style={footerStyle}>
        {footerCaption}
      </div>
    </>
  );
};

QuickTimeline.propTypes = {
  headerCaption: PropTypes.string,
  headerCaptionColor: PropTypes.string,
  headerIsBold: PropTypes.bool,
  headerIsItalic: PropTypes.bool,
  timelineBlocks: PropTypes.array.isRequired,
  titleBgColor: PropTypes.string,
  titleTextColor: PropTypes.string,
  titleIsBold: PropTypes.bool,
  titleIsItalic: PropTypes.bool,
  titleTextAlign: PropTypes.oneOf(["left", "center", "right"]),
  contentBgColor: PropTypes.string,
  contentTextColor: PropTypes.string,
  contentIsBold: PropTypes.bool,
  contentIsItalic: PropTypes.bool,
  contentTextAlign: PropTypes.oneOf(["left", "center", "right"]),
  dateColor: PropTypes.string,
  dateIsBold: PropTypes.bool,
  dateIsItalic: PropTypes.bool,
  borderRoundSize: PropTypes.number,
  circleBgColor: PropTypes.string,
  circleBorderColor: PropTypes.string,
  circleBorderHide: PropTypes.bool,
  timelineLineColor: PropTypes.string,
  footerCaption: PropTypes.string,
  footerCaptionColor: PropTypes.string,
  footerIsBold: PropTypes.bool,
  footerIsItalic: PropTypes.bool,
};

QuickTimeline.defaultProps = {
  timelineBlocks: [
    {
      title: "Title 1",
      content:
        "Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.",
      date: "26th Feb",
    },
    {
      title: "Title 2",
      content:
        "Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.",
      date: "26th Feb",
    },
    {
      title: "Title 3",
      content:
        "Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.",
      date: "26th Feb",
    },
    {
      title: "Title 4",
      content:
        "Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.",
      date: "26th Feb",
    },
    {
      title: "Title 5",
      content:
        "Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.",
      date: "26th Feb",
    },
    {
      title: "Title 6",
      content:
        "Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.",
      date: "26th Feb",
    },
  ],
  headerCaption: "Timeline Header",
  headerCaptionColor: "",
  headerIsBold: false,
  headerIsItalic: false,
  titleBgColor: "",
  titleTextColor: "",
  titleIsBold: true,
  titleIsItalic: false,
  titleTextAlign: "left",
  contentBgColor: "",
  contentTextColor: "",
  contentIsBold: false,
  contentIsItalic: false,
  contentTextAlign: "left",
  dateColor: "",
  dateIsBold: false,
  dateIsItalic: false,
  borderRoundSize: 5,
  circleBgColor: "",
  circleBorderColor: "",
  circleBorderHide: false,
  timelineLineColor: "",
  footerCaption: "Timeline Footer",
  footerCaptionColor: "",
  footerIsBold: false,
  footerIsItalic: false,
};
