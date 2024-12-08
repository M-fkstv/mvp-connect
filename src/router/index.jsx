import { lazy, Suspense } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { App } from '../App';
import { RotatingLines } from 'react-loader-spinner';
import { Layout } from '../components/Layout';

const Event = lazy(() => import('../components/EventItem/Event'));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<App />} />
      <Route
        path='/:name'
        element={
          <Suspense
            fallback={
              <div
                style={{
                  position: 'absolute',
                  height: '100vh',
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <RotatingLines
                  strokeColor='grey'
                  strokeWidth='5'
                  animationDuration='0.75'
                  width='96'
                  visible={true}
                />
              </div>
            }
          >
            <Event />
          </Suspense>
        }
      />
      ,
    </Route>,
  ),
);
