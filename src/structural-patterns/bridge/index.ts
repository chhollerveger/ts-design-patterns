import Facebook from "./plataforms/facebook";
import IPlataform from "./plataforms/i-plataform";
import Twitch from "./plataforms/twitch";
import YouTube from "./plataforms/youtube";
import AdvancedLive from "./transmissions/advanced-live";
import Live from "./transmissions/live";

function startLive(plataform: IPlataform) {
  
  const live = new Live(plataform);

  live.broadcasting();
  live.result();

}

function startAdvancedLive(plataform: IPlataform) {
  
  const live = new AdvancedLive(plataform);

  live.broadcasting();
  live.result();
  live.comments();
  live.subtitles();

}

startLive(new Twitch());
startAdvancedLive(new YouTube());
startAdvancedLive(new Facebook());