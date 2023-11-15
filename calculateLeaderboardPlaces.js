// @ts-check

/**
 * Time complexity: O(n log(n)), n = users.length; since it's based on built-in Array.prototype.sort(), which is considered n log n, and sometimes just n for smaller arrays.
 *
 * Pure (no side-effects)
 *
 * @param {{ userId: string; score: number }[]} users
 * @param {{ firstPlaceMinScore: number, secondPlaceMinScore: number, thirdPlaceMinScore: number }} minScores
 * @returns {{ userId: string; place: number }[]}
 */
export function calculateLeaderboardPlaces(users, minScores) {
  const nonQualifyingPlaceMark = 0;

  const scoresForChecks = [
    {
      place: 1,
      minScore: minScores.firstPlaceMinScore,
    },
    {
      place: 2,
      minScore: minScores.secondPlaceMinScore,
    },
    {
      place: 3,
      minScore: minScores.thirdPlaceMinScore,
    },
  ];

  /**
   * @param {Parameters<typeof calculateLeaderboardPlaces>[0][number]} user
   * @param {number} localBestAvailablePlace
   */
  function getPlace(user, localBestAvailablePlace) {
    for (let i = 0; i < scoresForChecks.length; i++) {
      const { place, minScore } = scoresForChecks[i];
      if (localBestAvailablePlace <= place && user.score >= minScore) {
        scoresForChecks.splice(i, 1); // to reduce the number of future unnecessary checks
        return place;
      }
    }
    return nonQualifyingPlaceMark;
  }

  /** @type {Parameters<typeof calculateLeaderboardPlaces>[0]} */
  const leftover = [];

  const sortedUsers = [...users].sort((a, b) => b.score - a.score);
  const potentialTop = sortedUsers.splice(0, 3);

  let bestAvailablePlace = 1;
  const finalTop = potentialTop
    .map(
      /** @returns {ReturnType<typeof calculateLeaderboardPlaces>[number]} */
      (user) => {
        bestAvailablePlace = getPlace(user, bestAvailablePlace);
        if (bestAvailablePlace === nonQualifyingPlaceMark) {
          leftover.push(user);
          // @ts-expect-error - undefined is then removed by .filter(Boolean)
          return undefined;
        }
        return { userId: user.userId, place: bestAvailablePlace };
      },
    )
    .filter(Boolean);

  const nonTopUsers = [...leftover, ...sortedUsers].map((user, userIndex) => ({
    userId: user.userId,
    place: userIndex + 4,
  }));

  return [...finalTop, ...nonTopUsers];
}
