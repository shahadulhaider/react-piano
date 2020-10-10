import { useEffect, EffectCallback } from 'react';

const useEffectOnce = (effect: EffectCallback) => {
  useEffect(effect, []);
};

export const useMount = (fn: Function) => {
  useEffectOnce(() => {
    fn();
  });
};
