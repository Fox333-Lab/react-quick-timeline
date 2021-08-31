import React from "react";

export const TimeLineBlocks = ({
  tlb,
  styles,
  i,
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
}) => {
  i = i + 1;
  var ss = i % 2 === 0 ? styles.right : styles.left;
  var posCircles =
    i % 2 === 0 ? styles.rightTimeCircles : styles.leftTimeCircles;
  borderRoundSize = borderRoundSize > 30 ? 30 : borderRoundSize;
  borderRoundSize = borderRoundSize < 0 ? 0 : borderRoundSize;

  const timeBlockHeaderStyle = {
    backgroundColor:
      tlb.titleBgColor === undefined || tlb.titleBgColor === ""
        ? titleBgColor === undefined || titleBgColor === ""
          ? ""
          : titleBgColor
        : tlb.titleBgColor,
    color:
      tlb.titleTextColor === undefined || tlb.titleTextColor === ""
        ? titleTextColor === undefined || titleTextColor === ""
          ? ""
          : titleTextColor
        : tlb.titleTextColor,
    fontWeight:
      tlb.titleIsBold === undefined
        ? titleIsBold !== undefined
          ? titleIsBold === true
            ? "bold"
            : "100"
          : ""
        : tlb.titleIsBold === true
        ? "bold"
        : "100",
    fontStyle:
      tlb.titleIsItalic === undefined
        ? titleIsItalic !== undefined
          ? titleIsItalic === true
            ? "italic"
            : "normal"
          : ""
        : tlb.titleIsBold === true
        ? "italic"
        : "normal",
    borderTopLeftRadius:
      tlb.borderRoundSize === undefined
        ? borderRoundSize === undefined
          ? "0px"
          : `${borderRoundSize}px`
        : `${tlb.borderRoundSize}px`,
    borderTopRightRadius:
      tlb.borderRoundSize === undefined
        ? borderRoundSize === undefined
          ? "0px"
          : `${borderRoundSize}px`
        : `${tlb.borderRoundSize}px`,
    textAlign:
      tlb.titleTextAlign === undefined || tlb.titleTextAlign === ""
        ? titleTextAlign === undefined || titleTextAlign === ""
          ? "left"
          : titleTextAlign
        : tlb.titleTextAlign,
  };
  const timeBlockContentStyle = {
    backgroundColor:
      tlb.contentBgColor !== undefined && tlb.contentBgColor !== ""
        ? tlb.contentBgColor
        : contentBgColor,
    color:
      tlb.contentTextColor !== undefined
        ? tlb.contentTextColor
        : contentTextColor,
    fontWeight:
      tlb.contentIsBold === undefined
        ? contentIsBold !== undefined
          ? contentIsBold === true
            ? "bold"
            : "100"
          : ""
        : tlb.contentIsBold === true
        ? "bold"
        : "100",
    fontStyle:
      tlb.contentIsItalic === undefined
        ? contentIsItalic !== undefined
          ? contentIsItalic === true
            ? "italic"
            : "normal"
          : ""
        : tlb.contentIsItalic === true
        ? "italic"
        : "normal",
    borderRadius:
      tlb.borderRoundSize === undefined
        ? borderRoundSize === undefined
          ? "0px"
          : `${borderRoundSize}px`
        : `${tlb.borderRoundSize}px`,
    textAlign:
      tlb.contentTextAlign === undefined || tlb.contentTextAlign === ""
        ? contentTextAlign === undefined || contentTextAlign === ""
          ? "left"
          : contentTextAlign
        : tlb.contentTextAlign,
  };
  const dateStyle = {
    color:
      tlb.dateColor !== undefined && tlb.dateColor !== ""
        ? tlb.dateColor
        : dateColor,
    fontWeight:
      tlb.dateIsBold === undefined
        ? dateIsBold !== undefined
          ? dateIsBold === true
            ? "bold"
            : "100"
          : ""
        : tlb.dateIsBold === true
        ? "bold"
        : "100",
    fontStyle:
      tlb.dateIsItalic === undefined
        ? dateIsItalic !== undefined
          ? dateIsItalic === true
            ? "italic"
            : "normal"
          : ""
        : tlb.dateIsItalic === true
        ? "italic"
        : "normal",
  };
  return (
    <div className={[styles.container, ss].join(" ")}>
      <div className={styles.content} style={timeBlockContentStyle}>
        <h2 style={timeBlockHeaderStyle}>{tlb.title}</h2>
        <p style={{ borderRadius: `${borderRoundSize}px` }}>{tlb.content}</p>
        <div className={styles.date_year}>
          <span className={styles.timelineDate} style={dateStyle}>
            {tlb.date}
          </span>
        </div>
      </div>
      <svg
        width="50"
        height="50"
        className={[styles.timeCircle, posCircles].join(" ")}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <title>Layer 1</title>
          <circle
            className={styles.circ}
            stroke="#ffff00"
            strokeWidth="5"
            r="17"
            cy="25"
            cx="25"
            fill="#333333"
          />
        </g>
      </svg>
    </div>
  );
};
