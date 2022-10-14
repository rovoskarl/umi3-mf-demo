import React from 'react';
import styles from './index.less';

import { Button } from 'core/AntdTest';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>

      <React.Suspense fallback="loading">
        <Button>aaa</Button>
      </React.Suspense>
    </div>
  );
}
