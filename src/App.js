import "./App.css";
import React from "react";
// import CustomMemo from "./CustomUseMemo/CustomMemo";
import { Search } from "./InfiniteScroll/Search";
import FileExplorerView from "./FileExplorer/FileExplorerView";
import { InfiniteScroll } from "./InfiniteScroll/InfiniteScroll";
import { Throttling } from "./Throttling/Throttling";
import { Stopwatch } from "./StopWatch/StopWatch";
import { Debounce } from "./Debounce/Debounce";
import { FormExample } from "./Form/Form";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { ToDo } from "./Todo";
import { TabsExample } from "./Tabs";
import { FeatureFlagComponent } from "./FeatureFlag/Features";
import { TicTacToe } from "./tic-tac-toe";
import SnakeAndLadder from "./SnakeLadder";
import GridLight from "./GridLight";
import NotificationWrapper from "./Notification";
import Chart from "./jiraChart/BarCharts";
import TypeHead from "./Typehead";
import Board from "./CircleGame/Board";

const LazyCustomMemo = React.lazy(() => import("./CustomUseMemo/CustomMemo"));
function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/">
            <Route path="/" element={<Debounce />} />
            <Route path="/featureFlag" element={<FeatureFlagComponent />} />
            <Route path="/throttling" element={<Throttling />} />
            <Route path="/memo" element={<LazyCustomMemo />} />
            <Route path="/file-explorer" element={<FileExplorerView />} />
            <Route path="/search" element={<Search />} />
            <Route path="/form-example" element={<FormExample />} />
            <Route path="/stopwatch" element={<Stopwatch />} />
            {/* <Route path="/infinite-scroll" element={<InfiniteScroll />} /> */}
            <Route path="/tabs" element={<TabsExample />} />
            <Route path="/todo" element={<ToDo />} />
            <Route path="/tic-tac-toe" element={<TicTacToe />} />
            <Route path="/snake-and-ladder" element={<SnakeAndLadder />} />
            <Route path="/grid-light" element={<GridLight />} />
            <Route path="/notification" element={<NotificationWrapper />} />
            <Route path="/chart" element={<Chart />} />
            <Route path="/typehead" element={<TypeHead />} />
            <Route path="/circle" element={<Board/>} />
          </Route>
        </Routes>
      </Suspense>
    </Router>

  );
}

export default App;
