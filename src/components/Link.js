import React from 'react';

const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    if (event.ctrlKey || event.metaKey) {
      return;
    }
    event.preventDefault();
    window.history.pushState({}, '', href);

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
