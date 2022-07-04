import { applyCSS } from "/-/deno.land/x/aleph@1.0.0-alpha.71/framework/core/style.ts";export const css = ".game .recent-words-container{flex-direction:column;align-items:flex-start;display:flex}.game .recent-words{margin-top:-16px}.game .recent-word{color:var(--color-dark-gray);padding-top:16px;font-size:16px}.game .most-recent-word{color:var(--color-brack);width:640px;padding:32px 0;font-size:32px}.game .most-recent-word span{font-family:AiShiroYukiguni_Free-Regular}.game .timer{width:120px;height:120px;background:var(--color-white);border:1px solid var(--color-light-gray);border-radius:60px;justify-content:center;align-items:center;display:flex}.game .time{color:var(--color-dark-gray);flex-direction:column;align-items:center;font-size:16px;display:flex}.game .time span{color:var(--color-brack);font-size:32px}.game .container{width:100%;flex-direction:row;justify-content:space-between;align-items:center;display:flex}.game form{box-sizing:border-box;flex-direction:column;align-items:center;display:flex}.game form input{width:602px;color:var(--color-gray);border:1px solid var(--color-light-gray);border-radius:100px;outline:none;padding:12px 18px;font-size:16px;font-weight:300;display:block}.game form input:focus{border:1px solid var(--color-gray);outline:none}.game form input::placeholder{color:var(--color-light-gray);font-weight:300}.game .game-over-buttons{flex-direction:column;align-items:center;padding-top:64px;display:flex}.game .buttons{flex-direction:row;justify-content:space-between;align-items:center;display:flex}.index .game-contents-container{flex-direction:column;justify-content:space-between;align-items:center;display:flex}";export default {};applyCSS("./src/styles/game.css", css);