const watch = require("node-watch");
//if(process.env === "")

watch("./src/app.ts", { recursive: true }, (event, name) => {
	require("esbuild")
		.build({
			entryPoints: ["./src/app.ts"],
			outfile: "./dist/app.js",
			bundle: true,
			watch: true,
			sourcemap: true,
		})
		.catch(() => process.exit(1));
});
