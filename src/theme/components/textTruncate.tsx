import { Typography } from '@mui/material';
import { useState, useEffect } from 'react';

interface props{
  text:any;
  maxLength:any;
}

const TextTruncate = ({ text, maxLength }:props) => {
  const [truncatedText, setTruncatedText] = useState(text);

  useEffect(() => {
    if (text.length > maxLength) {
      setTruncatedText(text.slice(0, maxLength) + '...');
    } else {
      setTruncatedText(text);
    }
  }, [text, maxLength]);

  return <Typography component={'span'}>{truncatedText}</Typography>;
};

export default TextTruncate;
