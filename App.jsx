import StateDemo from "./components/StateDemo";
import EffectDemo from "./components/EffectDemo";
import RefDemo from "./components/RefDemo";
import MemoDemo from "./components/MemoDemo";
import CallbackDemo from "./components/CallbackDemo";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>React Hooks Playground</h1>

      <StateDemo />
      <hr />

      <EffectDemo />
      <hr />

      <RefDemo />
      <hr />

      <MemoDemo />
      <hr />

      <CallbackDemo />
    </div>
  );
}

export default App;
