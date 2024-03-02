import React from "react";
import { Epg, Layout } from "planby";

// Import hooks
import { useApp } from "../useApp"

// Import components
import { Timeline, ChannelItem, ProgramItem } from "../components";

function Calendar() {
  const { isLoading, getEpgProps, getLayoutProps } = useApp();

  return (
    <div>
      <h3 className="mx-4 font-semibold text-start">Upcoming</h3>
      <div style={{ height: "46vh", width: "95%" }} className="mx-auto">
        <Epg isLoading={isLoading} {...getEpgProps()}>
          <Layout
            {...getLayoutProps()}
            renderTimeline={(props) => <Timeline {...props} />}
            renderProgram={({ program, ...rest }) => (
              <ProgramItem key={program.data.id} program={program} {...rest} />
            )}
            renderChannel={({ channel }) => (
              <ChannelItem key={channel.uuid} channel={channel} />
            )}
          />
        </Epg>
      </div>
    </div>
  );
}

export default Calendar;
