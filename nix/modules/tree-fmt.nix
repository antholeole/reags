{inputs, ...}: {
  perSystem = {pkgs, ...}: let
    deps = (import ../deps.nix) pkgs;
  in {
    treefmt = {
      projectRootFile = "flake.nix";
      programs = {
        alejandra.enable = true;
        biome = {
          package = pkgs.biome;
          enable = true;
        };
      };
    };
  };
}
