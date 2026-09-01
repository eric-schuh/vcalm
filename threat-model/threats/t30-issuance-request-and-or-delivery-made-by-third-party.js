(function () {
    var threat = {
        id: "T30",
        name: "Issuance Request and/or Delivery Made by Third Party",
        desc: "Verifiable credentials issuance has a request phase and a delivery phase. The request might be made by the subject or another role, and delivery can be to a client that might or might not be controlled by the subject.",
        response: [
            { id: "R45", name: "Cryptographic Delegation", type: "Reduce", desc: "Use of cryptographically bound delegation techniques, such as zCaps, allow for third parties to act on behalf of the subject." }
        ],
        elements: ["F1", "F19", "P1", "P4", "P5"],
        tags: ["security", "privacy"],
        taxonomyName: "STRIDE",
        taxonomyClass: "Spoofing"
    };
    window.ThreatModel.register(threat);
})();
