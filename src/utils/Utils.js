import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const formatDate = (today) => {
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    
    const formattedToday = dd + '-' + mm + '-' + yyyy;
    return formattedToday;
}

export const shortFormatDate = (today) => {
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();
  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;
  
  const formattedToday = dd + '-' + mm;
  return formattedToday;
}

export const printDocument= () => {
    const today = new Date();
    const date = formatDate(today);
    const input = document.getElementById('divToPrint');
    html2canvas(input, {scale: 1})
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        pdf.save(`rapportHebdoQA-${date}.pdf`);
      })
    ;
  }
  