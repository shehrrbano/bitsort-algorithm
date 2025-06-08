import React, { useState, useEffect } from 'react';
import Header from '../Common/Header';
import SettingsModal from '../Common/SettingsModal';
import ArrayInput from '../Dashboard/ArrayInput';
import VisualizationArea from '../Dashboard/VisualizationArea';
import PerformancePanel from '../Dashboard/PerformancePanel';
import ExplanationPanel from '../Dashboard/ExplanationPanel';
import ComplexityAnalysis from '../Performance/ComplexityAnalysis';
import CurrentResults from '../Performance/CurrentResults';
import AlgorithmExplanation from '../Performance/AlgorithmExplanation';
import AlgorithmSelector from '../Comparison/AlgorithmSelector';
import ComparisonPanels from '../Comparison/ComparisonPanels';
import SynchronizedControls from '../Comparison/SynchronizedControls';
import ResultsTable from '../Comparison/ResultsTable';
import { useTheme } from '../../hooks/useTheme';
import { useBitSort } from '../../hooks/useBitSort';
import { useAnimation } from '../../hooks/useAnimation';
import { TABS } from '../../utils/constants';

const MainLayout = () => {
  const [activeTab, setActiveTab] = useState(TABS.dashboard);
  const [showSettings, setShowSettings] = useState(false);
  
  // Settings state
  const [showBinary, setShowBinary] = useState(true);
  const [showStepNumbers, setShowStepNumbers] = useState(true);

  // Custom hooks
  const theme = useTheme();
  const bitSort = useBitSort();
  const animation = useAnimation(bitSort);

  // Initialize on component mount
  useEffect(() => {
    bitSort.handleGenerateArray();
  }, []);

  return (
    <div className={`min-h-screen ${theme.bgClass}`}>
      <Header 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        showSettings={showSettings}
        setShowSettings={setShowSettings}
        theme={theme}
      />

      {showSettings && (
        <SettingsModal
          showSettings={showSettings}
          setShowSettings={setShowSettings}
          showBinary={showBinary}
          setShowBinary={setShowBinary}
          showStepNumbers={showStepNumbers}
          setShowStepNumbers={setShowStepNumbers}
          animationSpeed={animation.animationSpeed}
          setAnimationSpeed={animation.setAnimationSpeed}
          theme={theme}
        />
      )}

      {/* MAIN DASHBOARD */}
      {activeTab === TABS.dashboard && (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-4">
          <ArrayInput 
            bitSort={bitSort}
            theme={theme}
          />
          
          <VisualizationArea 
            bitSort={bitSort}
            animation={animation}
            showBinary={showBinary}
            theme={theme}
          />
          
          <PerformancePanel 
            bitSort={bitSort}
            showStepNumbers={showStepNumbers}
            theme={theme}
          />

          <ExplanationPanel 
            bitSort={bitSort}
            animation={animation}
            theme={theme}
          />
        </div>
      )}

      {/* PERFORMANCE ANALYSIS */}
      {activeTab === TABS.performance && (
        <div className="p-4 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ComplexityAnalysis 
              bitSort={bitSort}
              theme={theme}
            />
            
            <CurrentResults 
              bitSort={bitSort}
              theme={theme}
            />
          </div>

          <AlgorithmExplanation theme={theme} />
        </div>
      )}

      {/* COMPARISON TOOL */}
      {activeTab === TABS.comparison && (
        <div className="p-4 max-w-6xl mx-auto">
          <AlgorithmSelector theme={theme} />
          
          <ComparisonPanels 
            bitSort={bitSort}
            theme={theme}
          />
          
          <SynchronizedControls 
            bitSort={bitSort}
            animation={animation}
            theme={theme}
          />
          
          <ResultsTable 
            bitSort={bitSort}
            theme={theme}
          />
        </div>
      )}
    </div>
  );
};

export default MainLayout;