const production = !process.env.ROLLUP_WATCH; 
module.exports = {
  future: { 
    purgeLayersByDefault: true, 
    removeDeprecatedGapUtilities: true,
  },
  plugins: [require("@tailwindcss/forms")],
  purge: {
    ,      
    ], 
    enabled: production // disable purge in dev
  },
};
