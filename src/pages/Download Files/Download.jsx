import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const Download = () => {
  const pdfUrl = "/asset_pdf/file-example_PDF_1MB.pdf"; // Path to your PDF file
  const pfmain ="/asset_pdf/Design_Analysis_Algorithms_Summaries.pdf";


  const files = [
    {
      title: "DAA Unit-1",
      downloadUrl: "/asset_pdf/file-example_PDF_1MB.pdf",
      downloadName: "file-example_PDF_1MB.pdf",
    },
    {
      title: "DAA Unit-2",
      downloadUrl: "/asset_pdf/Design_Analysis_Algorithms_Summaries.pdf",
      downloadName: "DAA_Summaries.pdf",
    },
    {
      title: "C++ Unit-1",
      downloadUrl: "/asset_pdf/Design_Analysis_Algorithms_Summaries.pdf",
      downloadName: "DAA_Summaries.pdf",
    },
    {
      title: "C++ Unit-2",
      downloadUrl: "/asset_pdf/Design_Analysis_Algorithms_Summaries.pdf",
      downloadName: "DAA_Summaries.pdf",
    },
  ];

  const handleDownload = (url, fileName) => {
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
    <h2>Files</h2>
    <Stack sx={{ display: "flex" }}>
      <br />
      <Box display="flex" flexWrap="wrap" gap={3}>
        {/* Map through files array to generate cards dynamically */}
        {files.map((file, index) => (
          <Card
            key={index}
            sx={{
              minWidth: 300,
              backgroundColor: "#000", // Black background
              color: "#fff", // White text color
              borderRadius: "15px",
              boxShadow: "0 4px 20px #b33030", // Red shadow
            }}
          >
            <CardContent>
              {/* Title Section */}
              <Typography variant="h5" component="div" gutterBottom>
                {file.title}
              </Typography>

              {/* Download and Preview Buttons */}
              <Stack sx={{ display: "flex", gap: "10px", flexDirection: "row" }}>
                <Button
                  onClick={() => handleDownload(file.downloadUrl, file.downloadName)}
                  variant="contained"
                  sx={{
                    backgroundColor: "#b33030", // Red button color
                    color: "#fff",
                    "&:hover": { backgroundColor: "#d00000" }, // Darker red on hover
                    marginTop: "15px",
                  }}
                >
                  Download Now
                </Button>

                {/* Preview Button - Opens in a new tab */}
                <Button
                  component="a"
                  href={file.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  sx={{
                    backgroundColor: "#b33030", // Red button color
                    color: "#fff",
                    "&:hover": { backgroundColor: "#d00000" }, // Darker red on hover
                    marginTop: "15px",
                  }}
                >
                  <RemoveRedEyeIcon />
                </Button>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Stack>
  </div>
  );
};

export default Download;
