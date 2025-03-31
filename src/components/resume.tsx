"use client";
import React, { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, ExternalLink } from "lucide-react";

const ResumePage = () => {
  const resumeUrl = "/resume.pdf";

  // Automatically open the resume in a new tab when the component mounts
  useEffect(() => {
    // Use setTimeout to ensure it happens after the component is fully mounted
    const timer = setTimeout(() => {
      window.open(resumeUrl, '_blank', 'noopener,noreferrer');
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pt-6 px-4">
      <Card className="shadow-lg">
        <CardHeader className="bg-gray-100 dark:bg-gray-800 py-4">
          <div className="flex items-center justify-center">
            <CardTitle className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-200 flex items-center">
              <FileText className="mr-3 text-primary" size={24} />
              Professional Resume
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-4 md:p-6">
          <div className="w-full flex flex-col items-center justify-center space-y-6 py-8">
            <p className="text-center text-gray-700 dark:text-gray-300 max-w-md">
              Your resume has been opened in a new tab. If it didn't open automatically, please use the buttons below.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center">
              <Button 
                variant="default" 
                asChild 
                className="flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <a 
                  href={resumeUrl} 
                  download 
                  aria-label="Download Resume"
                >
                  <Download size={20} />
                  <span>Download Resume</span>
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                onClick={() => window.open(resumeUrl, '_blank', 'noopener,noreferrer')}
                className="flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <ExternalLink size={20} />
                <span>Open in New Tab</span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResumePage;