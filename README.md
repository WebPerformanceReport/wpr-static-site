# WebPerformance Report Static Site

Web page performance test report every week in your inbox: [Website](https://webperformancereport.com/)

## Getting Started

### 1. Clone this Repository

```
git clone -b dev https://github.com/edwinmh/wpr-static-site
```

### 2. Navigate to the directory

```
cd wpr-static-site
```

### 3. Install dependencies

```
npm install
```

### 4. Run Eleventy

```
npx @11ty/eleventy
```

Or build and host locally for local development
```
npx @11ty/eleventy --serve
```

Or build automatically when a template changes:
```
npx @11ty/eleventy --watch
```

Or in debug mode:
```
DEBUG=* npx @11ty/eleventy
```
