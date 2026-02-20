import { useState } from 'react';
import { analyzeImage, batchAnalyzeImages, ImageAnalysisResult, BatchAnalysisResult } from '@/services/imageAnalysisService';

export const useImageAnalysis = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const analyzeSingleImage = async (fileId: number, apiKey: string): Promise<ImageAnalysisResult | null> => {
    setLoading(true);
    setError(null);
    try {
      const result = await analyzeImage(fileId, apiKey);
      if (!result.success) {
        setError(result.message || 'Analysis failed');
        return null;
      }
      return result;
    } catch (err: any) {
      setError(err.message || 'Unexpected error');
      return null;
    } finally {
      setLoading(false);
    }
  };

  const analyzeMultipleImages = async (fileIds: number[], apiKey: string): Promise<BatchAnalysisResult | null> => {
    setLoading(true);
    setError(null);
    try {
      const result = await batchAnalyzeImages(fileIds, apiKey);
      if (!result.success) {
        setError(result.message || 'Batch analysis failed');
        return null;
      }
      return result;
    } catch (err: any) {
      setError(err.message || 'Unexpected error');
      return null;
    } finally {
      setLoading(false);
    }
  };

  const resetError = () => setError(null);

  return {
    loading,
    error,
    analyzeSingleImage,
    analyzeMultipleImages,
    resetError
  };
};
