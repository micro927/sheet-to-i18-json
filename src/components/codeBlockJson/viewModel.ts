import { useEffect, useState } from 'react';

function useViewModel() {
  const [isShowTextCopiedMessage, setIsShowTextCopiedMessage] = useState(false);
  const copyText = async (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setIsShowTextCopiedMessage(true);
    });
  };

  useEffect(() => {
    if (isShowTextCopiedMessage) {
      setTimeout(() => {
        setIsShowTextCopiedMessage(false);
      }, 2000);
    }
  }, [isShowTextCopiedMessage]);

  return { copyText, isShowTextCopiedMessage };
}

export default useViewModel;
