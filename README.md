# Secure Storage for sensitive data

This Package aims to automatically encrypt your data in localStorage or cookies


### use case with zuzstand persist
```
  persist(
    (setState, getState, store) => ({
      ...createSlice(setState, getState, store),
    }),
    {
      name: secureStoreName,
      storage: createJSONStorage(() => cookiesSecureStorage),
    },
  )
```
