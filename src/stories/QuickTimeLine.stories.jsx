import React from "react";

import { QuickTimeline } from "../components/QuickTimeline";

export default {
  title: "Example/QuickTimeline",
  component: QuickTimeline,
  argTypes: {
    headerCaption: { description: "Header caption of timeline" },
    titleBgColor: {
      description: "Background color of the title of content blocks",
    },
  },
  // parameters: {
  //   docs: {
  //     page: null,
  //   },
  // },
};

const Template = (args) => <QuickTimeline {...args} />;

export const Timeline = Template.bind({});
Timeline.args = {
  headerCaption: "Timeline Header",
  footerCaption: "Timeline Footer",
};
