// Copyright Dark Logic Studios. Generation Mayhem.
// §5.1 Nav areas: Walkable, Oil (cost 4), CraneZone (cost 10 during telegraph), Ramp; plus link areas.

using UnityEngine;
using UnityEngine.AI;

namespace GenerationMayhem.Traversal
{
    /// <summary>
    /// Area names the co-dev must add in Window ▸ AI ▸ Navigation ▸ Areas (ProjectSettings/NavMeshAreas.asset
    /// is not in the repo yet). Missing areas resolve to -1 and fall back to Walkable with a warning.
    /// Link areas gate WHO may use a link via NavMeshAgent.areaMask:
    ///   RampLink  — K1–K3: Vipers (Fang, Tail-Strike, grunts), Slither, allies
    ///   GapLink   — container gap: Fang + allies only
    ///   RailLink  — R1/R2: allies only at slice
    /// </summary>
    public static class CityBlockNavAreas
    {
        public const string Oil = "Oil";
        public const string CraneZone = "CraneZone";
        public const string Ramp = "Ramp";
        public const string RampLink = "RampLink";
        public const string GapLink = "GapLink";
        public const string RailLink = "RailLink";

        public const float OilCost = 4f;
        public const float CraneZoneTelegraphCost = 10f;

        public static int Area(string name)
        {
            int a = NavMesh.GetAreaFromName(name);
            return a;
        }

        public static int AreaOrWalkable(string name)
        {
            int a = NavMesh.GetAreaFromName(name);
            if (a < 0)
            {
                Debug.LogWarning("[CityBlockNav] Nav area '" + name + "' missing — add it in Navigation ▸ Areas. Using Walkable.");
                return 0;
            }
            return a;
        }

        static int Bit(string name) { int a = NavMesh.GetAreaFromName(name); return a >= 0 ? 1 << a : 0; }

        /// <summary>Area mask for a role: everyone walks; links filtered per §5.2.</summary>
        public static int MaskFor(FighterRole role)
        {
            int all = NavMesh.AllAreas;
            int mask = all & ~Bit(GapLink) & ~Bit(RailLink);
            switch (role)
            {
                case FighterRole.Ally: mask |= Bit(GapLink) | Bit(RailLink); break;
                case FighterRole.Fang: mask |= Bit(GapLink); break;
                case FighterRole.Cobra:
                case FighterRole.Grunt:
                    break; // §5.2 lists Fang + Tail-Strike + Slither + allies on ramps; Swarm stays in open zones
                case FighterRole.Hero: break;
            }
            if (role == FighterRole.Cobra || role == FighterRole.Grunt) mask &= ~Bit(RampLink);
            return mask;
        }

        /// <summary>Call once at scene start (CityBlockNavBootstrap does).</summary>
        public static void ApplyCosts()
        {
            int oil = Area(Oil);
            if (oil >= 0) NavMesh.SetAreaCost(oil, OilCost);
            int crane = Area(CraneZone);
            if (crane >= 0) NavMesh.SetAreaCost(crane, 1f);
        }

        /// <summary>Crane hazard calls this on Telegraph start/end (cost 10 only during telegraph).</summary>
        public static void SetCraneTelegraph(bool on)
        {
            int crane = Area(CraneZone);
            if (crane >= 0) NavMesh.SetAreaCost(crane, on ? CraneZoneTelegraphCost : 1f);
        }
    }
}
