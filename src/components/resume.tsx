"use client";
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, ExternalLink } from "lucide-react";
import { useNavVisibility } from "@/App";  // Adjust import path to match your App location

const ResumePage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { setNavVisibility } = useNavVisibility();

  useEffect(() => {
    // Hide navbar when component mounts
    setNavVisibility(false);

    const checkMobileView = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check initial load
    checkMobileView();

    // Add resize listener
    window.addEventListener('resize', checkMobileView);

    // Cleanup: restore navbar visibility when component unmounts
    return () => {
      window.removeEventListener('resize', checkMobileView);
      setNavVisibility(true);
    };
  }, [setNavVisibility]);

  const renderPdfViewer = () => {
    if (isMobile) {
      return (
        <div className="w-full flex flex-col items-center justify-center space-y-4 p-4">
          <p className="text-center text-gray-600 dark:text-gray-400">
            PDF preview not available on mobile. Please download or open in browser.
          </p>
          <div className="flex space-x-4">
            <Button 
              variant="default" 
              asChild 
              className="flex items-center space-x-2"
            >
              <a 
                href="/resume.pdf" 
                download 
                aria-label="Download Resume"
              >
                <Download size={20} />
                <span>Download</span>
              </a>
            </Button>
            <Button 
              variant="outline" 
              asChild 
              className="flex items-center space-x-2"
            >
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Open Resume in New Tab"
              >
                <ExternalLink size={20} />
                <span>Open in Browser</span>
              </a>
            </Button>
          </div>
        </div>
      );
    }

    return (
      <div className="w-full h-[600px] border rounded-lg overflow-hidden">
        <iframe
          src="/resume.pdf"
          className="w-full h-full"
          title="Professional Resume"
          frameBorder="0"
          allowFullScreen
          aria-label="Resume PDF Viewer"
        />
      </div>
    );
  };

  return (
    <div 
      id="resume" 
      className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 p-4 md:p-8"
    >
      <div className="w-full max-w-4xl mx-auto space-y-6">
        <Card className="shadow-lg">
          <CardHeader className="bg-gray-100 dark:bg-gray-800 py-6">
            <div className="flex items-center justify-center">
              <CardTitle className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 flex items-center">
                <FileText className="mr-3 text-primary" size={32} />
                Professional Resume
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-4 md:p-6">
            {renderPdfViewer()}
          </CardContent>
        </Card>

        {!isMobile && (
          <div className="flex justify-center space-x-4">
            <Button 
              variant="default" 
              asChild 
              className="flex items-center space-x-2"
            >
              <a 
                href="/resume.pdf" 
                download 
                aria-label="Download Resume"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </a>
            </Button>
            <Button 
              variant="outline" 
              asChild 
              className="flex items-center space-x-2"
            >
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Open Resume in New Tab"
              >
                <ExternalLink size={20} />
                <span>Open in Browser</span>
              </a>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumePage;