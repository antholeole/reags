{ inputs, ...}: {
    perSystem = { pkgs, ... }: let 
        deps = (import ../deps.nix) pkgs;
    in {
        treefmt.programs = {
            programs.alejandra.enable = true;
            programs.biome.enable = true;
        };
    };
}